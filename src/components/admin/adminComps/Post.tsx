import React from "react";

export default function Post(props: any) {
    function newPostTab(id: number){
        props.sendData(id);
    }

    return(
        <>
            <div className="d-flex flex-row justify-content-end mb-2">
                <button type="button" className="btn-green" onClick={(e) => newPostTab(1)}>
                    <i className="bi bi-plus-lg"></i> New Post
                </button>
            </div>

            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th>#</th>
                            <th>Title</th>
                            <th>Post Date</th>
                            <th>Editor</th>
                            <th>Optoions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}