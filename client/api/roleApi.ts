import { getConfig, getAjaxHeaders } from "./config/config.js"
import { RoleDocument } from "../interfaces/inputInterfaces.js"

export async function getPublicRoles(): Promise<RoleDocument[]> {
    $.ajax({
        ...getAjaxHeaders(),
        type: "GET",
        url: `${getConfig().url}${getConfig().roleApi}`,
        cache: false,
        success: function(res) {
            return res as RoleDocument[]
        },
        error: function(err) {
            console.log(err);
            return []
        } 
    })
return []    
}
