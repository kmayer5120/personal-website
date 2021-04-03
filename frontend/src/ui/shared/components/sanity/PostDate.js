import React from "react";
import { dateFormatter } from "../../../utils/dateFormatter";

export const PostDate = ({date}) => {
    const { month, day, year} = dateFormatter(date);

    return (
        <>
            <h3 className="text-sm text-indigo-200">
                Published: {`${month}-${day}-${year}`}
            </h3>
        </>
    )
}