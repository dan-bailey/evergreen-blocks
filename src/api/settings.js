/*WordPress*/
import apiFetch from "@wordpress/api-fetch";
import {addQueryArgs} from "@wordpress/url";

export const fetchSettings = async () => {
    let path = 'wp/v2/settings',
        options ={};

    try {
        options = await apiFetch({
            path: path,
            method : 'GET'
        });
    } catch (error) {
        console.log('fetchSettings Errors:', error);
        return {
            evergreen_blocks_options_fetch_settings_errors : true
        }
    }
    if( options.evergreen_blocks_options){
        return options.evergreen_blocks_options;
    }
    return options;
};

export const updateSettings = async (data) => {
    let path = 'wp/v2/settings',
        options ={};

    let queryArgs = {
        evergreen_blocks_options : data
    }

    path = addQueryArgs(path, queryArgs);

    try {
        options = await apiFetch({
            path: path,
            method : 'POST'
        });
    } catch (error) {
        console.log('updateSettings Errors:', error);
        return {
            evergreen_blocks_options_update_settings_errors : true
        }
    }
    if( options.evergreen_blocks_options){
        return options.evergreen_blocks_options;
    }
    return options;
};