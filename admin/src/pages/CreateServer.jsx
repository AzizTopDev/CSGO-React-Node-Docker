import React, { Component } from 'react';
import axios from '../util/Api';
import { toastr } from 'react-redux-toastr';

export default class CreateSever extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            autostop: "true",
            autostop_minutes: "60",
            custom_domain: "",
            enable_mysql: "",
            game: "csgo",
            location: "",
            name: "",

            csgo_settings_autoload_configs: "",
            csgo_settings_disable_bots: "",
            csgo_settings_enable_csay_plugin: "",
            csgo_settings_enable_gotv: "",
            csgo_settings_enable_sourcemod: "",
            csgo_settings_game_mode: "",
            csgo_settings_insecure: "",
            csgo_settings_mapgroup: "",
            csgo_settings_mapgroup_start_map: "",
            csgo_settings_maps_source: "",
            csgo_settings_password: "",
            csgo_settings_pure_server: "",
            csgo_settings_rcon: "",
            csgo_settings_slots: "",
            csgo_settings_sourcemod_admins: "",
            csgo_settings_sourcemod_plugins: "",
            csgo_settings_steam_game_server_login_token: "",
            csgo_settings_tickrate: "",
            csgo_settings_workshop_authkey: "",
            csgo_settings_workshop_id: "",
            csgo_settings_workshop_start_map_id: "",
            teamspeak3_settings_slots: "",
        };

    }
    onHandleClick = () => {
        const {
            autostop,
            autostop_minutes,
            custom_domain,
            enable_mysql,
            game,
            location,
            name,
            csgo_settings_autoload_configs,
            csgo_settings_disable_bots,
            csgo_settings_enable_csay_plugin,
            csgo_settings_enable_gotv,
            csgo_settings_enable_sourcemod,
            csgo_settings_game_mode,
            csgo_settings_insecure,
            csgo_settings_mapgroup,
            csgo_settings_mapgroup_start_map,
            csgo_settings_maps_source,
            csgo_settings_password,
            csgo_settings_pure_server,
            csgo_settings_rcon,
            csgo_settings_slots,
            csgo_settings_sourcemod_admins,
            csgo_settings_sourcemod_plugins,
            csgo_settings_steam_game_server_login_token,
            csgo_settings_tickrate,
            csgo_settings_workshop_authkey,
            csgo_settings_workshop_id,
            csgo_settings_workshop_start_map_id,
            teamspeak3_settings_slots
        } = this.state;
        const data = {
            autostop,
            autostop_minutes,
            custom_domain,
            enable_mysql,
            game,
            location,
            name,
            csgo_settings_autoload_configs,
            csgo_settings_disable_bots,
            csgo_settings_enable_csay_plugin,
            csgo_settings_enable_gotv,
            csgo_settings_enable_sourcemod,
            csgo_settings_game_mode,
            csgo_settings_insecure,
            csgo_settings_mapgroup,
            csgo_settings_mapgroup_start_map,
            csgo_settings_maps_source,
            csgo_settings_password,
            csgo_settings_pure_server,
            csgo_settings_rcon,
            csgo_settings_slots,
            csgo_settings_sourcemod_admins,
            csgo_settings_sourcemod_plugins,
            csgo_settings_steam_game_server_login_token,
            csgo_settings_tickrate,
            csgo_settings_workshop_authkey,
            csgo_settings_workshop_id,
            csgo_settings_workshop_start_map_id,
            teamspeak3_settings_slots
        };
        if (name === "" || game === "" || csgo_settings_rcon === "") {
            toastr.warning('<name>, <game>, <csgo_settings.rcon> are required field !');
        } else {
            axios.post('/admin/server/create', data).then(({ data }) => {
                const { game_sever } = data;
                console.log(" Created GAME_SEVER ---", game_sever);
                toastr.success('Congrates!', 'Sever was created successfully !');
            }).catch(error => {
                if (error.response.status === 401) toastr.warning('You didn\'t represent valid information to create sever !');
                else toastr.error('Sever creating failed !');
            });
        }
    }
    render() {
        return (
            <div className="content content-full">
                <div className="block block-rounded block-bordered">
                    {/* Block Header */}
                    <div className="block-header block-header-default">
                        <h3 className="block-title">
                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sever Create Info</font></font>
                        </h3>
                    </div>
                    {/* Block Content */}
                    <div className="block-content">
                        <div className="px-3">

                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">autostop</span>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-control" onChange={(ev) => this.setState({ autostop: ev.target.value })} >
                                        <option value={null} disabled>Select autostop option</option>
                                        <option value="true">Enable</option>
                                        <option value="false">Disable</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Automatically stop server when empty min</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">autostop_minutes</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="number" className="form-control" value={this.state.autostop_minutes} onChange={(ev) => this.setState({ autostop_minutes: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Minutes until autostop triggers if is is enabled</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">custom_domain</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.custom_domain} onChange={(ev) => this.setState({ custom_domain: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Use a custom domain for the server</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">enable_mysql</span>
                                </div>
                                <div className="col-lg-4">
                                    {/* <input type="text" className="form-control" /> */}
                                    <select className="form-control" onChange={(ev) => this.setState({ enable_mysql: ev.target.value })} >
                                        <option value={null} disabled>Select mySql option</option>
                                        <option value="true">Enable</option>
                                        <option value="false">Disable</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Was mySql enabled?</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">game</span>
                                </div>
                                <div className="col-lg-4">
                                    {/* <input type="text" className="form-control is-invalid" defaultValue="csgo" disabled /> */}
                                    <select className="form-control is-invalid" defaultValue="csgo" >
                                        <option value={null} disabled>Select game type</option>
                                        <option value="csgo">csgo</option>
                                        <option value="mumble" disabled>mumble</option>
                                        <option value="teamfortress2" disabled>teamfortress2</option>
                                        <option value="teamspeak3" disabled>teamspeak3</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Game type</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">location</span>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-control" onChange={(ev) => this.setState({ location: ev.target.value })} >
                                        <option value={0} disabled>Select location</option>
                                        <option value="amsterdam">Amsterdam</option>
                                        <option value="barcelona">Barcelona</option>
                                        <option value="bristol">Bristol</option>
                                        <option value="chicago">Chicago</option>
                                        <option value="dallas">Dallas</option>
                                        <option value="dusseldorf">Dusseldorf</option>
                                        <option value="istanbul">Istanbul</option>
                                        <option value="los_angeles">Los Angeles</option>
                                        <option value="new_york_city">New York City</option>
                                        <option value="portland">Portland</option>
                                        <option value="stockholm">Stockholm</option>
                                        <option value="strasbourg">Strasbourg</option>
                                        <option value="sydney">Sydney</option>
                                        <option value="warsaw">Warsaw</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Sever location</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">name</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control is-invalid" value={this.state.name} onChange={(ev) => this.setState({ name: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Name of the server</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.autoload_configs</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_autoload_configs} onChange={(ev) => this.setState({ csgo_settings_autoload_configs: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">JSON list of configs to load automatically</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.disable_bots</span>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_disable_bots: ev.target.value })} >
                                        <option value={null} disabled>Select bot option</option>
                                        <option value="true">Enable</option>
                                        <option value="false">Disable</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Disable bots</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.enable_csay_plugin</span>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_enable_csay_plugin: ev.target.value })} >
                                        <option value={null} disabled>Select csay option</option>
                                        <option value="true">Enable</option>
                                        <option value="false">Disable</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Enable cSay plugin (required for eBot)</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.enable_gotv</span>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_enable_gotv: ev.target.value })} >
                                        <option value={null} disabled>Select GoTV option</option>
                                        <option value="true">Enable</option>
                                        <option value="false">Disable</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Enable GOTV</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.enable_sourcemod</span>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_enable_sourcemod: ev.target.value })} >
                                        <option value={null} disabled>Select sourcemod option</option>
                                        <option value="true">Enable</option>
                                        <option value="false">Disable</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Enable Sourcemod</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.game_mode</span>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_game_mode: ev.target.value })} >
                                        <option value={0} disabled>Select game mode</option>
                                        <option value=""></option>
                                        <option value="classic_competitive">classic_competitive</option>
                                        <option value="classic_casual">classic_casual</option>
                                        <option value="arms_race">arms_race</option>
                                        <option value="demolition">demolition</option>
                                        <option value="deathmatch">deathmatch</option>
                                        <option value="custom">custom</option>
                                        <option value="danger_zone">danger_zone</option>
                                        <option value="wingman">wingman</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Game mode</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.insecure</span>
                                </div>
                                <div className="col-lg-4">
                                    {/* <input type="text" className="form-control" /> */}
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_insecure: ev.target.value })} >
                                        <option value={null} disabled>Select sever insecure option</option>
                                        <option value=""></option>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Insecure server</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.mapgroup</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_mapgroup} onChange={(ev) => this.setState({ csgo_settings_mapgroup: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Mapgroup</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.mapgroup_start_map</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_mapgroup_start_map} onChange={(ev) => this.setState({ csgo_settings_mapgroup_start_map: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Mapgroup start map</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.maps_source</span>
                                </div>
                                <div className="col-lg-4">
                                    {/* <input type="text" className="form-control" value={this.state.csgo_settings_maps_source} onChange={(ev) => this.setState({ csgo_settings_maps_source: ev.target.value })} /> */}
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_maps_source: ev.target.value })} >
                                        <option value={null} disabled>Select sever insecure option</option>
                                        <option value=""></option>
                                        <option value="mapgroup">mapgroup</option>
                                        <option value="workshop">workshop</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Maps source</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.password</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_password} onChange={(ev) => this.setState({ csgo_settings_password: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Server password</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.pure_server</span>
                                </div>
                                <div className="col-lg-4">
                                    {/* <input type="text" className="form-control" /> */}
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_pure_server: ev.target.value })} >
                                        <option value={null} disabled>Select pure server option</option>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Pure server</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.rcon</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control is-invalid" value={this.state.csgo_settings_rcon} onChange={(ev) => this.setState({ csgo_settings_rcon: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">RCON password</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.slots</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="number" min="5" max="64" className="form-control" value={this.state.csgo_settings_slots} onChange={(ev) => this.setState({ csgo_settings_slots: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Server slots (5 ~ 64)</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.sourcemod_admins</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_sourcemod_admins} onChange={(ev) => this.setState({ csgo_settings_sourcemod_admins: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Sourcemod admins</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.sourcemod_plugins</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_sourcemod_plugins} onChange={(ev) => this.setState({ csgo_settings_sourcemod_plugins: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">JSON list of sourcemod plugin IDs</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.steam_game_server_login_token</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_steam_game_server_login_token} onChange={(ev) => this.setState({ csgo_settings_steam_game_server_login_token: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Steam Game Server Login Token</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.tickrate</span>
                                </div>
                                <div className="col-lg-4">
                                    {/* <input type="text" className="form-control" value={this.state.csgo_settings_tickrate} onChange={(ev) => this.setState({ csgo_settings_tickrate: ev.target.value })} /> */}
                                    <select className="form-control" onChange={(ev) => this.setState({ csgo_settings_tickrate: ev.target.value })} >
                                        <option value={null} disabled>Select Tickrate</option>
                                        <option value=""></option>
                                        <option value="64">64</option>
                                        <option value="85">85</option>
                                        <option value="100">100</option>
                                        <option value="102.4">102.4</option>
                                        <option value="128">128</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Server tickrate</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.workshop_authkey</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_workshop_authkey} onChange={(ev) => this.setState({ csgo_settings_workshop_authkey: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Workshop collection authkey, leave blank to use our default Authkey</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.workshop_id</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_workshop_id} onChange={(ev) => this.setState({ csgo_settings_workshop_id: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Steam workshop ID</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">csgo_settings.workshop_start_map_id</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" value={this.state.csgo_settings_workshop_start_map_id} onChange={(ev) => this.setState({ csgo_settings_workshop_start_map_id: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Steam ID of workshop start map</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">teamspeak3_settings.slots</span>
                                </div>
                                <div className="col-lg-4">
                                    <input type="number" className="form-control" value={this.state.teamspeak3_settings_slots} onChange={(ev) => this.setState({ teamspeak3_settings_slots: ev.target.value })} />
                                </div>
                                <div className="col-lg-4 my-auto">
                                    <span className="text-muted">Teamspeack3 slots number</span>
                                </div>
                            </div>
                            <div className="row mr-3 my-4">
                                <button type="button" className="btn btn-square btn-hero-primary ml-auto"
                                    onClick={this.onHandleClick}
                                >
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>Create Sever</font>
                                    </font>
                                </button>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        );
    }
}