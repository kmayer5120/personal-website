import React from "react";
import { dateFormatter } from "../../../utils/dateFormatter";

export const PostDate = ({date}) => {
    const { month, day, year, hour, minute } = dateFormatter(date);

    return (
        <>
            <h3 className="text-sm text-indigo-200">
                Created On: {`${month}-${day}-${year} ${hour}:${minute}`}
            </h3>
        </>
    )
}