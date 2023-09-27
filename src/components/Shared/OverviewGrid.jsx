import React, {useEffect} from "react";

export function OverviewGrid(){

    return(
        <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                        <thead className="border-b-8 border-white bg-purple-700 text-white">
                            <tr>
                                <th scope="col" className="px-2 py-2">className</th>
                                <th scope="col" className="px-2 py-2">Heading</th>
                                <th scope="col" className="px-2 py-2">Heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-8 border-white bg-purple-100 text-neutral-800">
                                <td className="whitespace-nowrap px-2 py-3">
                                    Secondary
                                </td>
                                <td className="whitespace-nowrap px-2 py-3">Cell</td>
                                <td className="whitespace-nowrap px-2 py-3">Cell</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    )
};