import {useEffect, useState, useRef} from "react";
import RichTextEditor from "../../global/RichTextEditor";

export default function PostCreate(props: any) {
    const [valueTitle, setValueTitle] = useState<string>("");
    const [valueThumbnail, setValueThumbnail] = useState<string>("");
    const [valueTextEditor, setValueTextEditor] = useState<string>("<p></p>");

    useEffect(() => {
        console.log("Render ");

        return() => {
            console.log("Unmount");
        }
    }, []);

    function newPostTab(id: number): void{
        props.sendData(id);
    }

    function textEditorVal(text: string): void {
        if(text === ""){
            setValueTextEditor("<p></p>");
        } 
        else{
            setValueTextEditor(text);
        }
    }

    return (
        <>
            <div className="d-flex flex-row justify-content-end mb-2">
                <button type="button" className="btn-yellow" onClick={(e) => newPostTab(0)}>
                    <i className="bi bi-arrow-left"></i> Go Back
                </button>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" onChange={(e: any) => setValueTitle(e.target.value)} placeholder="My Title"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
                        <input className="form-control" type="file" id="thumbnail" onChange={(e: any) => setValueThumbnail(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <RichTextEditor sendValues={textEditorVal}></RichTextEditor>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3" id="setValues" dangerouslySetInnerHTML={{ __html: valueTextEditor }} >
                    </div>
                </div>
            </div>
        </>
    );
}

