import SideMenu from "./SideMenu";

export default function HomeBody() {

    return(
        <>
            <div className="row">
                <div className="col-2 sideMenu">
                    <SideMenu/>
                </div>
                <div className="col-md-10 p-3">Colums</div>
            </div>
        </>
    );
}