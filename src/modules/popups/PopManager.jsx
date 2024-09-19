import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { getCookie, setCookie } from "../../utilsJS/cookieUtils"; // Import cookie utility functions

export default function PopupManager({
    popupTypes = null,
    popupsToShow = null,
    showStartup = false,
    useCookies = false,
}) {
    const initialPopup = { component: null };
    const [popup, setPopup] = useState(initialPopup);

    function getPopup(popupType) {
        if (popupsToShow) {
            const desiredPopObject = popupsToShow.filter((popup) => {
                return popup.popupType == popupType;
            });
            return desiredPopObject[0];
        } else {
            console.error(
                `Popup type ${popupType} was not found inside available popups ${popupsToShow}! Check PopupTypes inside PopManager and Actual Popups!`
            );
        }
    }

    useEffect(() => {
        // Handle showing the startup popup based on the prop and cookie
        if (showStartup) {
            let popupSeen = false;
            if (useCookies) {
                popupSeen = getCookie("popupSeen");
            }
            if (!popupSeen) {
                const timer = setTimeout(() => {
                    handleShowPopup(getPopup(popupTypes?.SHOW_STARTUP));

                    if (useCookies) {
                        setCookie("popupSeen", "true", 30); // Expires in 30 days
                    }
                }, 1000);

                // Cleanup the timer if the component unmounts before the timeout
                return () => clearTimeout(timer);
            }
        }
    }, [showStartup]);

    // Trigger the popup dispatch
    function handleShowPopup(popupObject) {
        setPopup({ component: popupObject.popupComponent });
    }

    function closePopup(e) {
        e.stopPropagation();
        setPopup({ component: null });
    }

    const CurrentPopup = popup.component;

    return (
        <CSSTransition
            in={!!CurrentPopup}
            timeout={300} // Duration of the transition
            classNames="popup" // Base class name for CSS transitions
            unmountOnExit // Unmount the component when not in
        >
            <div className="pop__modal" onClick={closePopup}>
                {CurrentPopup ? <CurrentPopup onClose={closePopup} /> : null}
            </div>
        </CSSTransition>
    );
}
