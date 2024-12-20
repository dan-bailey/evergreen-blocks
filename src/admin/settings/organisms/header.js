/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext';

/*Inbuilt Components*/
import SettingsNotice from "../molecules/notice";
import Navlist from "../molecules/navlist";
import SaveBtn from "../atoms/save-btn";

const SettingsHeader = () => {
    const { useIsPending, useNotice } = useContext(SettingsContext);
    return (
        <>
            <header className="evergreen-blocks-header evergreen-blocks-header-sticky">
                <div className="at-flex at-align-items-center at-justify-content-between">
                        <div className="evergreen-blocks-title">
                            <h1>{__('Settings', 'evergreen-blocks')}</h1>
                        </div>
                        <div className="evergreen-blocks-button">
                            <SaveBtn />
                        </div>
                    </div>               
            </header>
            {useNotice && !useIsPending && <SettingsNotice />}
            <Navlist />
        </>
    );
};

export default SettingsHeader;