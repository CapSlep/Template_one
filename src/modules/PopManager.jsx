import { useReducer, useEffect } from "react";
import { useData } from "../DataContext"; // Import the custom hook
import { CSSTransition } from "react-transition-group";
import { getCookie, setCookie } from "../utils/cookieUtils"; // Import cookie utility functions

// Import all potential popups
import StartupPop from "./popups/StartupPop";

// Define your action types
const popupTypes = {
    SHOW_STARTUP: "show_startup",
    CLOSE_POPUP: "close_popup",
};

// Map popup components to action types
const popupComponents = {
    [popupTypes.SHOW_STARTUP]: StartupPop,
    // Add more popups as needed
};

// Reducer to handle popup state
function popupReducer(state, action) {
    switch (action.type) {
        case popupTypes.SHOW_STARTUP:
            return { component: popupComponents[action.type] };
        case popupTypes.CLOSE_POPUP:
            return { component: null };
        default:
            throw new Error("Unknown action type: " + action.type);
    }
}

export default function PopupManager({ popupsToShow, showStartup }) {
    const data = useData(); // Access data from the context

    const initialPopup = { component: null };
    const [state, dispatch] = useReducer(popupReducer, initialPopup);

    useEffect(() => {
        // Handle showing the startup popup based on the prop and cookie
        if (showStartup) {
            const popupSeen = getCookie("popupSeen");

            if (!popupSeen) {
                const timer = setTimeout(() => {
                    handleShowPopup(popupTypes.SHOW_STARTUP);
                    setCookie("popupSeen", "true", 30); // Expires in 30 days
                }, 3000);

                // Cleanup the timer if the component unmounts before the timeout
                return () => clearTimeout(timer);
            }
        }
    }, [showStartup]);

    // Trigger the popup dispatch
    function handleShowPopup(popupType) {
        if (popupsToShow.includes(popupType)) {
            dispatch({ type: popupType });
        }
    }

    function closePopup() {
        dispatch({ type: popupTypes.CLOSE_POPUP });
    }

    const CurrentPopup = state.component;

    return (
        <CSSTransition
            in={!!CurrentPopup}
            timeout={300} // Duration of the transition
            classNames="popup" // Base class name for CSS transitions
            unmountOnExit // Unmount the component when not in
        >
            <div className="pop__modal">
                {CurrentPopup ? <CurrentPopup onClose={closePopup} /> : null}
            </div>
        </CSSTransition>
    );
}
