import { useData } from "../../DataContext"; // Import the custom hook

export default function Description() {
    const data = useData(); // Access data from the context
    return (
        <section className="description">
            <h2 className="description__title">
                {data.description.descriptionTitle}
            </h2>
            {data.description.descriptionTexts.map((text, index) => {
                return (
                    <p key={index} className="descriptin__text">
                        {text}
                    </p>
                );
            })}
            <table className="table">
                {data.description.descriptionTable.map(
                    (tableElement, index) => {
                        return (
                            <tbody
                                key={index}
                                className="table__body"
                                role="rowgroup"
                            >
                                <tr className="table__row">
                                    <th
                                        scope="col"
                                        className="table__head"
                                        role="cell"
                                        colSpan="2"
                                    >
                                        {tableElement.tableTitle}
                                    </th>
                                </tr>
                                {tableElement.tableRows.map(
                                    (tableRow, index) => {
                                        return (
                                            <tr
                                                className="table__row"
                                                key={index}
                                            >
                                                <th
                                                    className="table__cell"
                                                    role="cell"
                                                    scope="row"
                                                >
                                                    {tableRow.rowTitle}
                                                </th>
                                                <td className="table__cell">
                                                    {tableRow.rowText}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        );
                    }
                )}
            </table>
        </section>
    );
}
