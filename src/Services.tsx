import httpCommon from "./http-common";

class Services{
    login(data: any){
        return httpCommon.post("/login", data);
    }

    slideshow(){
        return httpCommon.get("slideshow");
    }
    
    // Admin 
    adminLogin(data: any){
        return httpCommon.post("/auth/admin/login", data);
    }
    
    adminLogout(){
        return httpCommon.post("/auth/admin/logout", {})
    }
    
    adminRefresh(){
        return httpCommon.get("/auth/admin/refresh")
    }
}

export default new Services();