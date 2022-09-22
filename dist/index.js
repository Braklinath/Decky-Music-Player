(function (React) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    let webpackCache = {};
    let hasWebpack5 = false;
    if (window.webpackJsonp && !window.webpackJsonp.deckyShimmed) {
        // Webpack 4, currently on stable
        const wpRequire = window.webpackJsonp.push([
            [],
            { get_require: (mod, _exports, wpRequire) => (mod.exports = wpRequire) },
            [['get_require']],
        ]);
        delete wpRequire.m.get_require;
        delete wpRequire.c.get_require;
        webpackCache = wpRequire.c;
    }
    else {
        // Webpack 5, currently on beta
        hasWebpack5 = true;
        const id = Math.random();
        let initReq;
        window.webpackChunksteamui.push([[id], {}, (r) => { initReq = r; }]);
        for (let i of Object.keys(initReq.m)) {
            webpackCache[i] = initReq(i);
        }
    }
    const allModules = hasWebpack5 ? Object.values(webpackCache).filter((x) => x) : Object.keys(webpackCache)
        .map((x) => webpackCache[x].exports)
        .filter((x) => x);
    const findModule = (filter) => {
        for (const m of allModules) {
            if (m.default && filter(m.default)) return m.default;
            if (filter(m)) return m;
        }
    };
    const findModuleChild = (filter) => {
        for (const m of allModules) {
            for (const mod of [m.default, m]) {
                const filterRes = filter(mod);
                if (filterRes) { return filterRes; } else { continue; }
            }
        }
    };
    const CommonUIModule = allModules.find((m) => { if (typeof m !== 'object') return false;
        for (let prop in m) { if (m[prop]?.contextType?._currentValue && Object.keys(m).length > 60) return true; } return false;
    });
    findModule((m) => { if (typeof m !== 'object') return false;
        for (let prop in m) { if (m[prop]?.toString && /Spinner\)}\),.\.createElement\(\"path\",{d:\"M18 /.test(m[prop].toString())) return true; } return false;
    });
    allModules.find((m) => { if (typeof m !== 'object') return undefined;
        for (let prop in m) { if (m[prop]?.computeRootMatch) return true; } return false;
    });

    const DialogButton = Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('Object.assign({type:"button"') &&
        mod?.render?.toString()?.includes('DialogButton'));
    // Button isn't exported, so call DialogButton to grab it
    DialogButton.render({}).type; // its actually a forwarded ref but that doesn't really matter in usage

    const ButtonItem = Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('"highlightOnFocus","childrenContainerWidth"') || mod?.render?.toString()?.includes('childrenContainerWidth:"min"'));

    const Focusable = findModuleChild((m) => { if (typeof m !== 'object') return undefined;
        for (let prop in m) { if (m[prop]?.render?.toString()?.includes('["flow-children","onActivate","onCancel","focusClassName",')) return m[prop]; }
    });

    const showContextMenu = findModuleChild((m) => { if (typeof m !== 'object') return undefined;
        for (let prop in m) { if (typeof m[prop] === 'function' && m[prop].toString().includes('stopPropagation))')) { return m[prop]; } }
    });
    const Menu = findModuleChild((m) => { if (typeof m !== 'object') return undefined;
        for (let prop in m) { if (m[prop]?.prototype?.HideIfSubmenu && m[prop]?.prototype?.HideMenu) { return m[prop]; } }
    });
    const MenuItem = findModuleChild((m) => { if (typeof m !== 'object') return undefined;
        for (let prop in m) { if (m[prop]?.prototype?.OnOKButton && m[prop]?.prototype?.OnMouseEnter) { return m[prop]; } }
    });
    /*
    all().map(m => {
    if (typeof m !== "object") return undefined;
    for (let prop in m) { if (m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) return m[prop]}
    }).find(x => x)
    */

    const [panelSection, mod] = findModuleChild((mod) => {
        for (let prop in mod) { if (mod[prop]?.toString()?.includes('.PanelSection')) { return [mod[prop], mod]; } } return null;
    });
    const PanelSection = panelSection;
    const PanelSectionRow = Object.values(mod).filter((exp) => !exp?.toString()?.includes('.PanelSection'))[0];

    /*// this entire chunk below... useless???
    var SideMenu;
    (function (SideMenu) {
        SideMenu[SideMenu["None"] = 0] = "None";
        SideMenu[SideMenu["Main"] = 1] = "Main";
        SideMenu[SideMenu["QuickAccess"] = 2] = "QuickAccess";
    })(SideMenu || (SideMenu = {}));
    var QuickAccessTab;
    (function (QuickAccessTab) {
        QuickAccessTab[QuickAccessTab["Notifications"] = 0] = "Notifications";
        QuickAccessTab[QuickAccessTab["RemotePlayTogetherControls"] = 1] = "RemotePlayTogetherControls";
        QuickAccessTab[QuickAccessTab["VoiceChat"] = 2] = "VoiceChat";
        QuickAccessTab[QuickAccessTab["Friends"] = 3] = "Friends";
        QuickAccessTab[QuickAccessTab["Settings"] = 4] = "Settings";
        QuickAccessTab[QuickAccessTab["Perf"] = 5] = "Perf";
        QuickAccessTab[QuickAccessTab["Help"] = 6] = "Help";
        QuickAccessTab[QuickAccessTab["Decky"] = 7] = "Decky";
    })(QuickAccessTab || (QuickAccessTab = {}));
    var DisplayStatus;
    (function (DisplayStatus) {
        DisplayStatus[DisplayStatus["Invalid"] = 0] = "Invalid";
        DisplayStatus[DisplayStatus["Launching"] = 1] = "Launching";
        DisplayStatus[DisplayStatus["Uninstalling"] = 2] = "Uninstalling";
        DisplayStatus[DisplayStatus["Installing"] = 3] = "Installing";
        DisplayStatus[DisplayStatus["Running"] = 4] = "Running";
        DisplayStatus[DisplayStatus["Validating"] = 5] = "Validating";
        DisplayStatus[DisplayStatus["Updating"] = 6] = "Updating";
        DisplayStatus[DisplayStatus["Downloading"] = 7] = "Downloading";
        DisplayStatus[DisplayStatus["Synchronizing"] = 8] = "Synchronizing";
        DisplayStatus[DisplayStatus["ReadyToInstall"] = 9] = "ReadyToInstall";
        DisplayStatus[DisplayStatus["ReadyToPreload"] = 10] = "ReadyToPreload";
        DisplayStatus[DisplayStatus["ReadyToLaunch"] = 11] = "ReadyToLaunch";
        DisplayStatus[DisplayStatus["RegionRestricted"] = 12] = "RegionRestricted";
        DisplayStatus[DisplayStatus["PresaleOnly"] = 13] = "PresaleOnly";
        DisplayStatus[DisplayStatus["InvalidPlatform"] = 14] = "InvalidPlatform";
        DisplayStatus[DisplayStatus["PreloadComplete"] = 16] = "PreloadComplete";
        DisplayStatus[DisplayStatus["BorrowerLocked"] = 17] = "BorrowerLocked";
        DisplayStatus[DisplayStatus["UpdatePaused"] = 18] = "UpdatePaused";
        DisplayStatus[DisplayStatus["UpdateQueued"] = 19] = "UpdateQueued";
        DisplayStatus[DisplayStatus["UpdateRequired"] = 20] = "UpdateRequired";
        DisplayStatus[DisplayStatus["UpdateDisabled"] = 21] = "UpdateDisabled";
        DisplayStatus[DisplayStatus["DownloadPaused"] = 22] = "DownloadPaused";
        DisplayStatus[DisplayStatus["DownloadQueued"] = 23] = "DownloadQueued";
        DisplayStatus[DisplayStatus["DownloadRequired"] = 24] = "DownloadRequired";
        DisplayStatus[DisplayStatus["DownloadDisabled"] = 25] = "DownloadDisabled";
        DisplayStatus[DisplayStatus["LicensePending"] = 26] = "LicensePending";
        DisplayStatus[DisplayStatus["LicenseExpired"] = 27] = "LicenseExpired";
        DisplayStatus[DisplayStatus["AvailForFree"] = 28] = "AvailForFree";
        DisplayStatus[DisplayStatus["AvailToBorrow"] = 29] = "AvailToBorrow";
        DisplayStatus[DisplayStatus["AvailGuestPass"] = 30] = "AvailGuestPass";
        DisplayStatus[DisplayStatus["Purchase"] = 31] = "Purchase";
        DisplayStatus[DisplayStatus["Unavailable"] = 32] = "Unavailable";
        DisplayStatus[DisplayStatus["NotLaunchable"] = 33] = "NotLaunchable";
        DisplayStatus[DisplayStatus["CloudError"] = 34] = "CloudError";
        DisplayStatus[DisplayStatus["CloudOutOfDate"] = 35] = "CloudOutOfDate";
        DisplayStatus[DisplayStatus["Terminating"] = 36] = "Terminating";
    })(DisplayStatus || (DisplayStatus = {}));
    //*/

    const Router = findModuleChild((m) => { if (typeof m !== 'object') return undefined;
        for (let prop in m) { if (m[prop]?.Navigate && m[prop]?.NavigationManager) return m[prop]; }
    });

    const SidebarNavigation = findModuleChild((mod) => {
        for (let prop in mod) { if (mod[prop]?.toString()?.includes('"disableRouteReporting"')) { return mod[prop]; } } return null;
    });

    const SliderField = Object.values(CommonUIModule).find((mod) => mod?.toString()?.includes('SliderField,fallback'));

    const staticClasses = findModule((mod) => typeof mod === 'object' && mod.TransitionMenuDelay);
    findModule((mod) => typeof mod === 'object' && mod.ScrollPanel && mod.ScrollY);
    findModule((mod) => typeof mod === 'object' && mod.WithFirstRow);
    findModule((mod) => typeof mod === 'object' && mod.PanelSectionRow);
    findModule((mod) => typeof mod === 'object' && mod.PatchNotes && mod.PostedTime);
    findModule((mod) => typeof mod === 'object' && mod.MenuButton && mod.MenuActive);

    const SteamSpinner = findModuleChild((m) => { if (typeof m !== "object") return undefined;
        for (let prop in m) {
            if (m[prop]?.toString()?.includes("Steam Spinner") && m[prop].toString().includes("PreloadThrobber")) return m[prop]; }
    });

    // TypeScript helper function
    const definePlugin = (fn) => { return (...args) => { return fn(...args); }; };// TODO: Maybe wrap this

    var DefaultContext = {
      color: undefined,
      size: undefined,
      className: undefined,
      style: undefined,
      attr: undefined
    };
    var IconContext = React__default["default"].createContext && React__default["default"].createContext(DefaultContext);
    // ?????????????
    var __assign = window && window.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };
    // ????????
    var __rest = window && window.__rest || function (s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    };

    //These three believe are necessary
    function Tree2Element(tree) {
      return tree && tree.map(function (node, i) {
        return React__default["default"].createElement(node.tag, __assign({
          key: i
        }, node.attr), Tree2Element(node.child));
      });
    }
    function GenIcon(data) {
      return function (props) {
        return React__default["default"].createElement(IconBase, __assign({
          attr: __assign({}, data.attr)
        }, props), Tree2Element(data.child));
      };
    }
    function IconBase(props) {
      var elem = function (conf) {
        var attr = props.attr,
            size = props.size,
            title = props.title,
            svgProps = __rest(props, ["attr", "size", "title"]);

        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className) className = conf.className;
        if (props.className) className = (className ? className + ' ' : '') + props.className;
        return React__default["default"].createElement("svg", __assign({
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
          className: className,
          style: __assign(__assign({
            color: props.color || conf.color
          }, conf.style), props.style),
          height: computedSize,
          width: computedSize,
          xmlns: "http://www.w3.org/2000/svg"
        }), title && React__default["default"].createElement("title", null, title), props.children);
      };

      return IconContext !== undefined ? React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
        return elem(conf);
      }) : elem(DefaultContext);
    }

    // THIS FILE IS AUTO GENERATED
    function FaFastBackward (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12z"}}]})(props);
    }function FaFastForward (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"}}]})(props);
    }function FaMusic (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"}}]})(props);
    }function FaPause (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}}]})(props);
    }function FaPlay (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(props);
    }
    // Absolutely no idea what this does, is intended for, or what? i believe these generate the UI icons

    // Following bits and bobs defube the GUI, definitely keep
    const titleStyles = {
        display: "flex",
        paddingTop: "3px",
        paddingBottom: "14px",
        paddingRight: "16px",
        boxShadow: "unset",
    };
    const Title = () => {
        return (window.SP_REACT.createElement(Focusable, { style: titleStyles, className: staticClasses.Title },
            window.SP_REACT.createElement("div", { style: { marginRight: "auto", flex: 0.9 } }, "Music Control")));
    };

    const musicControlDividerStyle = {
        content: "",
        bottom: "-0.5px",
        left: "0",
        right: "0",
        height: "1px",
        background: "#23262e",
        width: "calc(100% + 32px)",
        marginLeft: "-16px",
        marginRight: "-16px",
    };
    const musicControlButtonStyleFirst = {
        marginLeft: "0px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px 0px 0px 0px",
        minWidth: "0",
    };
    const musicControlButtonStyle = {
        marginLeft: "5px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px 0px 0px 0px",
        minWidth: "0",
    };
    const musicControlFieldDividerStyle = {
        content: "",
        bottom: "-0.5px",
        left: "0",
        right: "0",
        height: "1px",
        background: "#23262e",
        width: "100%",
        marginTop: "5px",
        marginBottom: "5px",
    };
    const musicControlFieldStyle = {
        width: "180px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    };

    const InfoSection = () => { const onClickInfo = () => { Router.CloseSideMenus(); Router.Navigate("/decky/musiccontrol/info"); };
        return (window.SP_REACT.createElement(ButtonItem, { layout: "below", bottomSeparator: false, onClick: onClickInfo }, "Info"));
    };
    // GUI bits and bobs end here

    //default album art icon png.
    var default_music = 'http://127.0.0.1:1337/plugins/MusicControl/assets/default_music-de70c8a5.png';

    // default state settings, probably useful
    const defaultState = {
        hasChangedPlaybackState: false,
        hasChangedProvider: true,
        isSeeking: false,
        isSettingVolume: false,
        hasAvailableTrack: false,
        currentSong: "Not Playing",
        currentArtist: "Unknown Artist",
        currentArtUrl: default_music,
        currentTrackId: "/not/used",
        currentTrackProgress: 0,
        currentTrackLength: 1,
        currentTrackStatus: "Paused",
        currentServiceProvider: "",
        providers: [],
        providersToIdentity: [],
        currentVolume: 1.0,
        canModifyVolume: false,
        canSeek: false,
    };
    const defaultMeta = {
        hasAvailableTrack: false,
        hasChangedPlaybackState: false,
        isSeeking: false,
        isSettingVolume: false,
        currentSong: "Not Playing",
        currentArtist: "Unknown Artist",
        currentArtUrl: default_music,
        currentTrackId: "/not/used",
        currentTrackProgress: 0,
        currentTrackLength: 1,
        currentTrackStatus: "Paused",
        currentVolume: 1.0,
        canModifyVolume: false,
        canSeek: false,
    };

    // I do not know about this next chunk
    let server = undefined;
    function resolve(promise, setter) {
        (async function () { const data = await promise;
            if (data.success) { console.debug("Got resolved", data, "promise", promise); setter(data.result);
            } else { console.warn("Resolve failed:", data, "promise", promise); }
        })();
    }
    function execute(promise) {
        (async function () { const data = await promise;
            if (data.success) {  console.debug("Got executed", data, "promise", promise);
            } else {             console.warn("Execute failed:", data, "promise", promise); }
        })();
    }
    function setServer(s) {                     server = s; }
    // Chunk ends here

    // Python functions
    function getMetaData() {                         return server.callPluginMethod("get_meta_data", {}); }
    function cacheAlbumArt(artUrl) {                 return server.callPluginMethod("cache_album_art", { artUrl: artUrl }); }
    function triggerPlay() {                         return server.callPluginMethod("sp_play", {}); }
    function triggerNext() {                         return server.callPluginMethod("sp_next", {}); }
    function triggerPrevious() {                     return server.callPluginMethod("sp_previous", {}); }
    function triggerSetPosition(position, trackid) { return server.callPluginMethod("sp_set_position", { position: position, trackid: trackid, }); }
    function triggerTrackStatus() {                  return server.callPluginMethod("sp_track_status", {}); }
    function getProviderIdentity(orgPath) {          return server.callPluginMethod("sp_identity", { orgPath }); }
    function getTrackProgress() {                    return server.callPluginMethod("sp_track_progress", {}); }
    function getTrackVolume() {                      return server.callPluginMethod("sp_get_volume", {}); }
    function getCanSeek() {                          return server.callPluginMethod("sp_can_seek", {}); }
    function triggerSetVolume(volume) {              return server.callPluginMethod("sp_set_volume", { volume }); }
    function getMediaPlayerList() {                  return server.callPluginMethod("sp_list_media_players", {}); }
    function testVolumeControl() {                   return server.callPluginMethod("sp_test_volume_control", {}); }
    // This next one is specific and can most likely be removed
    /*
    function setMediaPlayer(player) {
        if (player == "")
            return server.callPluginMethod("sp_set_media_player", {
                player: "org.mpris.MediaPlayer2.spotify",
            });
        return server.callPluginMethod("sp_set_media_player", { player });
    }//*/

    const AlbumArt = ({ albumArt }) => {
        const [isCachingArt, setIsCachingArt] = React.useState(false);
        const [lastCachedUrl, setLastCachedUrl] = React.useState("");
        const [currentDisplayUrl, setCurrentDisplayUrl] = React.useState(defaultState.currentArtUrl);
        if (lastCachedUrl != albumArt && !isCachingArt) {
            if (albumArt.startsWith("file:///")) {
                setIsCachingArt(true);
                resolve(cacheAlbumArt(albumArt), (cachedArt) => {
                    if (cachedArt == "") { setCurrentDisplayUrl(defaultState.currentArtUrl);
                    } else { setCurrentDisplayUrl(cachedArt); }
                    setIsCachingArt(false);
                });
            } else { setCurrentDisplayUrl(albumArt); }
            setLastCachedUrl(albumArt);
        }
        return (window.SP_REACT.createElement("div", { style: { width: "80px", height: "80px" } },
            window.SP_REACT.createElement("img", { style: { borderRadius: "5px", width: "80px", height: "80px" }, src: currentDisplayUrl, onError: ({ currentTarget }) => {
                    if (currentTarget.src == defaultState.currentArtUrl) return;
                    currentTarget.src = defaultState.currentArtUrl;
                } })));
    };

    const ArtistInfoPanel = ({ title, artist, }) => {
        return (window.SP_REACT.createElement("div", { style: { width: "100%", marginLeft: "10px" } },
            window.SP_REACT.createElement("div", { style: musicControlFieldStyle }, title),
            window.SP_REACT.createElement("div", { style: musicControlFieldDividerStyle }),
            window.SP_REACT.createElement("div", { style: musicControlFieldStyle }, artist),
            window.SP_REACT.createElement("div", { style: musicControlFieldDividerStyle })));
    };

    // This block needs to be tested with to see if they're relevant
    const isValidStringValue = (value) => {
        return value != "" && value != null && typeof value == "string";
    };
    const isValidStringValueInRecord = (record, key) => {
        if (!(key in record))
            return false;
        const value = record[key];
        return isValidStringValue(value);
    };
    const isValidNumber = (value) => {
        return ((typeof value === "number" && isFinite(value)) ||
            (typeof value === "string" && value !== "" && !isNaN(parseFloat(value))));
    };
    const isValidNumberInRecord = (record, key) => {
        if (!(key in record))
            return false;
        const value = record[key];
        return isValidNumber(value);
    };
    const getValidAlbumArtUrlInRecord = (record, key) => {
        if (!(key in record))
            return defaultState.currentArtUrl;
        const value = record[key];
        if (value == "" || value == null || typeof value != "string")
            return defaultState.currentArtUrl;
        return value;
    };
    // block ends here

    // Don't know about this entire block that starts here -- looks like it should be kept In
    var AppActions;
    (function (AppActions) {
        AppActions[AppActions["SetDefaultState"]                = 0] = "SetDefaultState";
        AppActions[AppActions["SetDefaultMeta"]                 = 1] = "SetDefaultMeta";
        AppActions[AppActions["SetState"]                       = 2] = "SetState";
        AppActions[AppActions["SetHasChangedProvider"]          = 3] = "SetHasChangedProvider";
        AppActions[AppActions["SetHasAvailableTrack"]           = 4] = "SetHasAvailableTrack";
        AppActions[AppActions["SetIsSeeking"]                   = 5] = "SetIsSeeking";
        AppActions[AppActions["SeekToPosition"]                 = 6] = "SeekToPosition";
        AppActions[AppActions["SetIsAdjustingVolume"]           = 7] = "SetIsAdjustingVolume";
        AppActions[AppActions["AdjustVolumeByUser"]             = 8] = "AdjustVolumeByUser";
        AppActions[AppActions["SetPlayingState"]                = 9] = "SetPlayingState";
        AppActions[AppActions["SetPlayingStateByUser"]          = 10] = "SetPlayingStateByUser";
        AppActions[AppActions["SetCurrentServiceProvider"]      = 11] = "SetCurrentServiceProvider";
        AppActions[AppActions["SetTrackProgress"]               = 12] = "SetTrackProgress";
        AppActions[AppActions["SetCanModifyVolume"]             = 13] = "SetCanModifyVolume";
        AppActions[AppActions["SetMetaData"]                    = 14] = "SetMetaData";
        AppActions[AppActions["SetVolume"]                      = 15] = "SetVolume";
        AppActions[AppActions["SetCanSeek"]                     = 16] = "SetCanSeek";
        AppActions[AppActions["SetProviders"]                   = 17] = "SetProviders";
        AppActions[AppActions["AddProviderIdentity"]            = 18] = "AddProviderIdentity";
        AppActions[AppActions["SetHasChangedPlaybackState"]     = 19] = "SetHasChangedPlaybackState";
    })(AppActions || (AppActions = {}));
    const AppStateContext = React.createContext({
        state: defaultState,
        dispatch: () => null,
    });
    function mainReducer(state, action) {
        switch (action.type) {
            case AppActions.SetDefaultState: {
                return { ...state, ...defaultState };
            }
            case AppActions.SetDefaultMeta: {
                return { ...state, ...defaultMeta };
            }
            case AppActions.SetState: {
                return { ...state, ...action.value };
            }
            case AppActions.SetIsSeeking: {
                return { ...state, isSeeking: action.value };
            }
            case AppActions.SetHasChangedPlaybackState: {
                return { ...state, hasChangedPlaybackState: action.value };
            }
            case AppActions.SetCanSeek: {
                return { ...state, canSeek: action.value };
            }
            case AppActions.SeekToPosition: {
                return { ...state, currentTrackProgress: action.value, isSeeking: true };
            }
            case AppActions.SetPlayingState: {
                if (state.hasChangedPlaybackState)
                    return state;
                return { ...state, currentTrackStatus: action.value };
            }
            case AppActions.SetPlayingStateByUser: {
                return { ...state, currentTrackStatus: action.value };
            }
            case AppActions.SetIsAdjustingVolume: {
                return { ...state, isSettingVolume: action.value };
            }
            case AppActions.SetHasChangedProvider: {
                return { ...state, hasChangedProvider: action.value };
            }
            case AppActions.SetProviders: {
                return { ...state, providers: action.value };
            }
            case AppActions.AddProviderIdentity: {
                return {
                    ...state,
                    providersToIdentity: [...state.providersToIdentity, action.value],
                };
            }
            case AppActions.SetTrackProgress: {
                if (state.isSeeking)
                    return state;
                return {
                    ...state,
                    currentTrackProgress: isValidNumber(action.value)
                        ? action.value
                        : 0.0,
                };
            }
            case AppActions.SetCanModifyVolume: {
                return { ...state, canModifyVolume: action.value };
            }
            case AppActions.AdjustVolumeByUser: {
                return { ...state, currentVolume: action.value, isSettingVolume: true };
            }
            case AppActions.SetVolume: {
                if (state.isSettingVolume)
                    return state;
                return { ...state, currentVolume: action.value };
            }
            case AppActions.SetCurrentServiceProvider: {
                const hasChanged = state.currentServiceProvider != action.value;
                if (hasChanged) {
                    return {
                        ...state,
                        currentServiceProvider: action.value,
                        hasChangedProvider: true,
                    };
                }
                return state;
            }
            case AppActions.SetHasAvailableTrack: {
                return { ...state, hasAvailableTrack: action.value };
            }
            case AppActions.SetMetaData: {
                const title = isValidStringValueInRecord(action.value, "title")
                    ? action.value["title"]
                    : defaultState.currentSong;
                const artist = isValidStringValueInRecord(action.value, "artist")
                    ? action.value["artist"]
                    : defaultState.currentArtist;
                const albumUrl = getValidAlbumArtUrlInRecord(action.value, "artUrl");
                const trackLength = isValidNumberInRecord(action.value, "length")
                    ? parseFloat(action.value["length"])
                    : defaultState.currentTrackLength;
                const trackId = isValidStringValueInRecord(action.value, "trackid")
                    ? action.value["trackid"]
                    : defaultState.currentTrackId;
                return {
                    ...state,
                    currentSong: title,
                    currentArtist: artist,
                    currentArtUrl: albumUrl,
                    hasAvailableTrack: true,
                    currentTrackLength: trackLength,
                    currentTrackId: trackId,
                };
            }
            default: {
                return state;
            }
        }
    }
    const AppContextProvider = ({ children }) => {
        const [state, dispatch] = React.useReducer(mainReducer, defaultState);
        const value = { state, dispatch };
        return (window.SP_REACT.createElement(AppStateContext.Provider, { value: value }, children));
    };
    function useStateContext() {
        const context = React__default["default"].useContext(AppStateContext);
        if (context === undefined) {
            throw new Error("useSettings must be used within a AppContextProvider");
        }
        return context;
    }
    // And ends here

    // need to test out how this works
    const SongProgressSlider = () => {
        const { state, dispatch } = useStateContext();
        const seekTimeoutRef = React.useRef(null);
        const onSliderChanged = (value) => {
            const roundedProgress = Math.round(value * state.currentTrackLength);
            execute(triggerSetPosition(roundedProgress, state.currentTrackId));
            dispatch({
                type: AppActions.SeekToPosition,
                value: roundedProgress,
            });
            if (seekTimeoutRef.current != null) {
                clearTimeout(seekTimeoutRef.current);
            }
            seekTimeoutRef.current = setTimeout(() => {
                dispatch({
                    type: AppActions.SetIsSeeking,
                    value: false,
                });
            }, 1500);
        };
        const onDismount = () => {
            clearTimeout(seekTimeoutRef.current);
            seekTimeoutRef.current = null;
        };
        React.useEffect(() => {
            // Clear the interval when the component unmounts
            return () => {
                onDismount();
            };
        }, []);
        if (state.currentTrackLength <= 1)
            return window.SP_REACT.createElement("div", null);
        return (window.SP_REACT.createElement(PanelSectionRow, null,
            window.SP_REACT.createElement(SliderField, { value: state.currentTrackProgress / state.currentTrackLength, min: 0, max: 1, step: 0.05, disabled: !state.canSeek, onChange: onSliderChanged })));
    };

    /*
    // this seems like it wouldn't be useful
    const MediaProviderButton = (props) => {
        const { state, dispatch } = useStateContext();
        const getDisplayNameForProvider = (provider) => {
            const providerIndex = state.providersToIdentity.findIndex((mapping) => mapping.provider == provider);
            if (providerIndex < 0)
                return provider.replace("org.mpris.MediaPlayer2.", "");
            return state.providersToIdentity[providerIndex].name;
        };
        const handleOnClick = (e) => showContextMenu(window.SP_REACT.createElement(Menu, { label: "Select Media Player", cancelText: "Cancel" }, state.providers.map((provider) => {
            return (window.SP_REACT.createElement(MenuItem, { onSelected: () => {
                    setMediaPlayer(provider);
                    dispatch({
                        type: AppActions.SetCurrentServiceProvider,
                        value: provider,
                    });
                } }, getDisplayNameForProvider(provider)));
        })), e.currentTarget ?? window);
        return (window.SP_REACT.createElement(ButtonItem, { layout: "below", bottomSeparator: false, onClick: handleOnClick }, props.currentProvider == ""
            ? "No Media Player Found"
            : getDisplayNameForProvider(props.currentProvider)));
    };
    //*/

    // these seem like they're good
    const MusicControls = () => {
        const { state, dispatch } = useStateContext();
        const playPauseToggledTrimoutRef = React.useRef(null);
        const onClickPrevious = () => {
            execute(triggerPrevious());
        };
        const onClickPlayPause = () => {
            if (state.hasAvailableTrack) {
                if (playPauseToggledTrimoutRef.current != null) {
                    clearTimeout(playPauseToggledTrimoutRef.current);
                }
                dispatch({
                    type: AppActions.SetPlayingStateByUser,
                    value: state.currentTrackStatus == "Playing" ? "Paused" : "Playing",
                });
                playPauseToggledTrimoutRef.current = setTimeout(() => {
                    dispatch({
                        type: AppActions.SetHasChangedPlaybackState,
                        value: false,
                    });
                }, 1000);
            }
            execute(triggerPlay());
        };
        const onClickNext = () => {
            execute(triggerNext());
        };
        const onDismount = () => {
            clearTimeout(playPauseToggledTrimoutRef.current);
            playPauseToggledTrimoutRef.current = null;
        };
        React.useEffect(() => {
            // Clear the interval when the component unmounts
            return () => {
                onDismount();
            };
        }, []);
        return (window.SP_REACT.createElement(Focusable, { style: { marginTop: "10px", marginBottom: "10px", display: "flex" }, "flow-children": "horizontal" },
            window.SP_REACT.createElement(DialogButton, { style: musicControlButtonStyleFirst, onClick: onClickPrevious },
                window.SP_REACT.createElement(FaFastBackward, { style: { marginTop: "-4px", display: "block" } })),
            window.SP_REACT.createElement(DialogButton, { style: musicControlButtonStyle, onClick: onClickPlayPause }, state.currentTrackStatus == "Playing" ? (window.SP_REACT.createElement(FaPause, { style: { marginTop: "-4px", display: "block" } })) : (window.SP_REACT.createElement(FaPlay, { style: { marginTop: "-4px", display: "block" } }))),
            window.SP_REACT.createElement(DialogButton, { style: musicControlButtonStyle, onClick: onClickNext },
                window.SP_REACT.createElement(FaFastForward, { style: { marginTop: "-4px", display: "block" } }))));
    };

    const VolumeControl = () => {
        const { state, dispatch } = useStateContext();
        const volumeTimeoutRef = React.useRef(null);
        const onSliderChanged = (value) => {
            const normalizedValue = (value /= 100.0);
            execute(triggerSetVolume(normalizedValue));
            dispatch({
                type: AppActions.AdjustVolumeByUser,
                value: normalizedValue,
            });
            if (volumeTimeoutRef.current != null) {
                clearTimeout(volumeTimeoutRef.current);
            }
            volumeTimeoutRef.current = setTimeout(() => {
                dispatch({
                    type: AppActions.SetIsAdjustingVolume,
                    value: false,
                });
            }, 1500);
        };
        const onDismount = () => {
            clearTimeout(volumeTimeoutRef.current);
            volumeTimeoutRef.current = null;
        };
        React.useEffect(() => {
            // Clear the interval when the component unmounts
            return () => {
                onDismount();
            };
        }, []);
        if (!state.hasAvailableTrack || !state.canModifyVolume)
            return window.SP_REACT.createElement("div", null);
        return (window.SP_REACT.createElement("div", null,
            window.SP_REACT.createElement("div", { style: { marginTop: "5px" }, className: staticClasses.PanelSectionTitle }, "Playback Volume"),
            window.SP_REACT.createElement(PanelSectionRow, null,
                window.SP_REACT.createElement(SliderField, { value: Math.round(state.currentVolume * 100), min: 0, max: 100, step: 1, onChange: onSliderChanged }))));
    };

    const Content = () => {
        const { state, dispatch } = useStateContext();
        const updateCallback = React.useRef();
        const updateStatus = () => {
            /*resolve(getMediaPlayerList(), (mediaPlayers) => {
                if (mediaPlayers == "Unavailable" ||
                    mediaPlayers == null ||
                    typeof mediaPlayers != "string" ||
                    mediaPlayers == "") {
                    dispatch({ type: AppActions.SetDefaultState });
                    return;
                }
                const providers = mediaPlayers.split(",");
                dispatch({ type: AppActions.SetProviders, value: providers });
                if (!providers.includes(state.currentServiceProvider) ||
                    state.currentServiceProvider == "") {
                    if (providers.length > 0) {
                        dispatch({
                            type: AppActions.SetCurrentServiceProvider,
                            value: providers[0],
                        });
                        setMediaPlayer(providers[0]);
                    }
                    else {
                        if (state.currentServiceProvider == "")
                            return;
                        dispatch({
                            type: AppActions.SetCurrentServiceProvider,
                            value: "",
                        });
                        setMediaPlayer("");
                        return;
                    }
                }
                providers.forEach((provider) => {
                    const identityIndex = state.providersToIdentity.findIndex((mapping) => mapping.provider == provider);
                    if (identityIndex >= 0)
                        return;
                    resolve(getProviderIdentity(provider), (providerName) => {
                        dispatch({
                            type: AppActions.AddProviderIdentity,
                            value: { provider: provider, name: providerName },
                        });
                    });
                });
                updateTrackData();
            });*/
        };
        const isValidMetaData = (metaData) => {
            return (metaData != "Unavailable" &&
                metaData != null &&
                typeof metaData == "string" &&
                metaData != "" &&
                metaData.length > 0);
        };/*
        const updateTrackData = () => {
            resolve(getMetaData(), (metaData) => {
                if (!isValidMetaData(metaData)) { dispatch({ type: AppActions.SetDefaultMeta }); return; }
                const variables = metaData.split("\n");
                const metaObject = {};
                variables.forEach((value) => { const keyValue = value.split("|"); metaObject[keyValue[0]] = keyValue[1]; });
                dispatch({ type: AppActions.SetMetaData, value: metaObject });
                // In some rare cases for the first time the metaData can be correct but it won't have any actual info yet
                if ((state.currentTrackId == "" ||
                    state.currentTrackId == defaultState.currentTrackId) &&
                    "trackid" in metaObject &&
                    metaObject["trackid"] != "") {
                    dispatch({ type: AppActions.SetHasChangedProvider, value: true });
                }
                if (!state.isSeeking) { resolve(getTrackProgress(), (progress) => { dispatch({ type: AppActions.SetTrackProgress, value: progress }); }); }
                resolve(triggerTrackStatus(), (status) => { dispatch({ type: AppActions.SetPlayingState, value: status });
                if (state.canModifyVolume)
                    resolve(getTrackVolume(), (volume) => {
                        dispatch({
                            type: AppActions.SetVolume,
                            value: volume,
                        });
                    });
                if (state.hasChangedProvider) {
                    console.debug("Changed MusicControl provider, testing for featureset.");
                    resolve(testVolumeControl(), (result) => {
                        dispatch({
                            type: AppActions.SetCanModifyVolume,
                            value: result == "true",
                        });
                        if (result == "true")
                            resolve(getTrackVolume(), (volume) => {
                                dispatch({ type: AppActions.AdjustVolumeByUser, value: volume, });
                                dispatch({ type: AppActions.SetIsAdjustingVolume, value: false, });
                            });
                    });
                    resolve(getCanSeek(), (result) => { dispatch({ type: AppActions.SetCanSeek, value: result == "true", }); });
                    dispatch({ type: AppActions.SetHasChangedProvider, value: false, });
                }
            });
        }; //*
        React.useEffect(() => { updateCallback.current = updateStatus; });
        React.useEffect(() => {
            console.debug("Setting up periodic hooks for MusicControl.");
            function tick() { updateCallback.current(); }
            const id = setInterval(tick, 1000);
            updateStatus();
            return () => clearInterval(id);
        }, []);//*/
        return (window.SP_REACT.createElement(PanelSection, null,
            window.SP_REACT.createElement("div", { className: staticClasses.PanelSectionTitle }, "Currently Playing"),
            window.SP_REACT.createElement("div", { style: { display: "flex", marginBottom: "5px" } },
                window.SP_REACT.createElement(AlbumArt, { albumArt: state.currentArtUrl }),
                window.SP_REACT.createElement(ArtistInfoPanel, { title: state.currentSong, artist: state.currentArtist })),
            window.SP_REACT.createElement(SongProgressSlider, null),
            window.SP_REACT.createElement(MusicControls, null),
            window.SP_REACT.createElement("div", { style: musicControlDividerStyle }),
            window.SP_REACT.createElement(VolumeControl, null),
            //window.SP_REACT.createElement(PanelSectionRow, null, window.SP_REACT.createElement(MediaProviderButton, { currentProvider: state.currentServiceProvider })),
            window.SP_REACT.createElement(PanelSectionRow, null,
                window.SP_REACT.createElement(InfoSection, null))));
    };

    const InfoPage = () => {
        return (window.SP_REACT.createElement(Focusable, null,
            "This text has been hijacked! MusicControl allows you to control any media playback that is currently running that implements the MPRIS dbus interface. ",
            window.SP_REACT.createElement("br", null),
            "Examples of application that are supported:",
            window.SP_REACT.createElement("ul", null,
                window.SP_REACT.createElement("li", null, "Spotify"),
                window.SP_REACT.createElement("li", null, "Cider"),
                window.SP_REACT.createElement("li", null, "Chrome / Firefox"),
                window.SP_REACT.createElement("li", null, "Strawberry")),
            "Only the flatpak versions of these applications have been tested, and not all of them might support the full feature set, so it is recommended to use the discover store to install the applications."));
    };

    const TroubleshootingPage = () => {
        return (window.SP_REACT.createElement(Focusable, null, "Make sure you have followed the steps on the Usage page. If the plugin still does not detect running media players when it should fresh after installation, try restarting your steam deck first. If the problems persist, please make an issue on the github page or send a message in the MusicControl Support thread in the #support-plugins channel of the Steam Deck Homebrew Discord."));
    };

    const UsagePage = () => {
        return (window.SP_REACT.createElement(Focusable, null,
            "For the plugin to be able to see the media player, you need to follow these steps:",
            window.SP_REACT.createElement("ol", null,
                window.SP_REACT.createElement("li", null, "Install your music application through discover store."),
                window.SP_REACT.createElement("li", null, "Add your music player as a non-steam game in desktop mode."),
                window.SP_REACT.createElement("li", null, "Launch your music player in game mode and start playback of music.")),
            window.SP_REACT.createElement("br", null),
            "When the application has launched and you have started playback, you can switch to a game using the steam button while keeping the media player running in the background. The plugin should automatically detect the running media player and show controls for you. In the case of multiple running media players, you can select which one to control in the plugin panel."));
    };

    const InfoRoute = () => {
        return (window.SP_REACT.createElement(SidebarNavigation, { title: "MusicControl", showTitle: true, pages: [
                {
                    title: "Info",
                    content: window.SP_REACT.createElement(InfoPage, null),
                    route: "/decky/musiccontrol/info/info",
                },
                {
                    title: "Usage",
                    content: window.SP_REACT.createElement(UsagePage, null),
                    route: "/decky/musiccontrol/info/usage",
                },
                {
                    title: "Troubleshooting",
                    content: window.SP_REACT.createElement(TroubleshootingPage, null),
                    route: "/decky/musiccontrol/info/troubleshooting",
                },
            ] }));
    };

    var index = definePlugin((serverApi) => {
        setServer(serverApi);
        serverApi.routerHook.addRoute("/decky/musiccontrol/info", InfoRoute, () => {
            return (window.SP_REACT.createElement(React.Suspense, { fallback: window.SP_REACT.createElement("div", { style: {
                        marginTop: "40px",
                        height: "calc( 100% - 40px )",
                        overflowY: "scroll",
                    } },
                    window.SP_REACT.createElement(SteamSpinner, null)) },
                window.SP_REACT.createElement(InfoRoute, null)));
        });
        return {
            title: window.SP_REACT.createElement(Title, null),
            content: (window.SP_REACT.createElement(AppContextProvider, null,
                window.SP_REACT.createElement(Content, null))),
            icon: window.SP_REACT.createElement(FaMusic, null),
            onDismount() {
                serverApi.routerHook.removeRoute("/decky/musiccontrol/info");
            },
        };
    });

    return index;

})(SP_REACT);
