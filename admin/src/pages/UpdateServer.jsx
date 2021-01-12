import React, { Component } from 'react';
import axios from '../util/Api';
import { toastr } from 'react-redux-toastr';

export default class UpdateServer extends Component {
    _isMounted = false;
    state = {
        isLoading: false,
        game_server: null,
        isError: false,

        sever_id: "",
        autostop: "",
        autostop_minutes: "",
        custom_domain: "",
        enable_mysql: "",
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
    componentDidMount() {
        this._isMounted = true;
        const { serverId } = this.props.match.params;
        if (this._isMounted) {
            this.setState({ isLoading: true, sever_id: serverId });
            axios.get(`/admin/server/detail/${serverId}`).then(({ data }) => {
                console.log(" response data ---------", data);
                const { game_server } = data;
                this.setState({
                    isLoading: false,
                    game_server: game_server
                });
            }).catch(err => {
                console.error(" get sever detail error : ", err);
                this.setState({
                    isLoading: false,
                    isError: true
                });
            });
        }
    }
    onHandleClick = () => {
        const {
            sever_id,
            autostop,
            autostop_minutes,
            custom_domain,
            enable_mysql,
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
            sever_id,
            autostop,
            autostop_minutes,
            custom_domain,
            enable_mysql,
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
        if (sever_id) {
            if(
                autostop === "" &&
                autostop_minutes === "" &&
                custom_domain === "" &&
                enable_mysql === "" &&
                location === "" &&
                name === "" &&
                csgo_settings_autoload_configs === "" &&
                csgo_settings_disable_bots === "" &&
                csgo_settings_enable_csay_plugin === "" &&
                csgo_settings_enable_gotv === "" &&
                csgo_settings_enable_sourcemod === "" &&
                csgo_settings_game_mode === "" &&
                csgo_settings_insecure === "" &&
                csgo_settings_mapgroup === "" &&
                csgo_settings_mapgroup_start_map === "" &&
                csgo_settings_maps_source === "" &&
                csgo_settings_password === "" &&
                csgo_settings_pure_server === "" &&
                csgo_settings_rcon === "" &&
                csgo_settings_slots === "" &&
                csgo_settings_sourcemod_admins === "" &&
                csgo_settings_sourcemod_plugins === "" &&
                csgo_settings_steam_game_server_login_token === "" &&
                csgo_settings_tickrate === "" &&
                csgo_settings_workshop_authkey === "" &&
                csgo_settings_workshop_id === "" &&
                csgo_settings_workshop_start_map_id === "" &&
                teamspeak3_settings_slots === ""
            ) {
                toastr.warning('You didn\'t represent any changes !');
            } else {
                axios.post('/admin/server/update', data).then(({ data }) => {
                    toastr.success('Great', 'Sever was updated successfully !');
                })
                .catch(error => {
                    toastr.error('Sever updating failed !');
                });
            }
        } else {
            toastr.warning('Sever id was not set !');
        }
    }
    render() {
        console.log(" ** this.state : ", this.state)
        const { isLoading, isError, game_server } = this.state;
        return (
            <div className="content content-full">
                <div className="block block-rounded block-bordered">
                    {/* Block Header */}
                    <div className="block-header block-header-default">
                        <h3 className="block-title">
                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Server Update Info</font></font>
                        </h3>
                    </div>
                    {/* Block Content */}
                    <div className="block-content">
                        {
                            isLoading ?
                                <div className="d-flex justify-content-center">
                                    <h3>Loading ...</h3>
                                </div>
                                :
                                (
                                    game_server ?
                                        <div className="px-3">
                                            {/* row 1 */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted"># id</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.id}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">This is sever id of dathost</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">game</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.game}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Game type</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">players_online</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.players_online}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Players online</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">ip</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.ip}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Sever ip</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">on</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.on}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Sever status</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">cost_per_hour</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.cost_per_hour}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Cost per hour</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">max_cost_per_hour</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.max_cost_per_hour}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Max cost per hour</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">max_cost_per_month</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.max_cost_per_month}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Max cost per month</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">mysql_username</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.mysql_username}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">mySql access username</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">mysql_password</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.mysql_password}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">mySql access password</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">ftp_password</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.ftp_password}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Ftp access password</span>
                                                </div>
                                            </div>




                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">autostop</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <select className="form-control" defaultValue={`${game_server.autostop}`} onChange={(ev) => this.setState({ autostop: ev.target.value })} >
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
                                                    <input type="number" className="form-control" placeholder={`${game_server.autostop_minutes}`} value={this.state.autostop_minutes} onChange={(ev) => this.setState({ autostop_minutes: ev.target.value })} />
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
                                                    <input type="text" className="form-control" placeholder={`${game_server.custom_domain}`} value={this.state.custom_domain} onChange={(ev) => this.setState({ custom_domain: ev.target.value })} />
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
                                                    {/* <input type="text" className="form-control" placeholder={`${game_server.enable_mysql}`} disabled /> */}
                                                    <select className="form-control" defaultValue={`${game_server.enable_mysql}`} onChange={(ev) => this.setState({ enable_mysql: ev.target.value })} >
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
                                                    <span className="text-muted">location</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <select className="form-control" defaultValue={`${game_server.location}`} onChange={(ev) => this.setState({ location: ev.target.value })} >
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
                                                    <input type="text" className="form-control" placeholder={`${game_server.name}`} value={this.state.name} onChange={(ev) => this.setState({ name: ev.target.value })} />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Name of the server</span>
                                                </div>
                                            </div>

                                            {
                                                game_server.csgo_settings ?
                                                    <React.Fragment>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">csgo_settings.autoload_configs</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.autoload_configs}`} value={this.state.csgo_settings_autoload_configs} onChange={(ev) => this.setState({ csgo_settings_autoload_configs: ev.target.value })} />
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
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.disable_bots}`} onChange={(ev) => this.setState({ csgo_settings_disable_bots: ev.target.value })} >
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
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.enable_csay_plugin}`} onChange={(ev) => this.setState({ csgo_settings_enable_csay_plugin: ev.target.value })} >
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
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.enable_gotv}`} onChange={(ev) => this.setState({ csgo_settings_enable_gotv: ev.target.value })} >
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
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.enable_sourcemod}`} onChange={(ev) => this.setState({ csgo_settings_enable_sourcemod: ev.target.value })} >
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
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.game_mode}`} onChange={(ev) => this.setState({ csgo_settings_game_mode: ev.target.value })} >
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
                                                                {/* <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.insecure}`} disabled /> */}
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.insecure}`} onChange={(ev) => this.setState({ csgo_settings_insecure: ev.target.value })} >
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.mapgroup}`} value={this.state.csgo_settings_mapgroup} onChange={(ev) => this.setState({ csgo_settings_mapgroup: ev.target.value })} />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.mapgroup_start_map}`} value={this.state.csgo_settings_mapgroup_start_map} onChange={(ev) => this.setState({ csgo_settings_mapgroup_start_map: ev.target.value })} />
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
                                                                {/* <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.maps_source}`} value={this.state.csgo_settings_maps_source} onChange={(ev) => this.setState({ csgo_settings_maps_source: ev.target.value })} /> */}
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.maps_source}`} onChange={(ev) => this.setState({ csgo_settings_maps_source: ev.target.value })} >
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.password}`} value={this.state.csgo_settings_password} onChange={(ev) => this.setState({ csgo_settings_password: ev.target.value })} />
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
                                                                {/* <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.pure_server}`} disabled /> */}
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.pure_server}`} onChange={(ev) => this.setState({ csgo_settings_pure_server: ev.target.value })} >
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.rcon}`} value={this.state.csgo_settings_rcon} onChange={(ev) => this.setState({ csgo_settings_rcon: ev.target.value })} />
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
                                                                <input type="number" min="5" max="64" className="form-control" placeholder={`${game_server.csgo_settings.slots}`} value={this.state.csgo_settings_slots} onChange={(ev) => this.setState({ csgo_settings_slots: ev.target.value })} />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.sourcemod_admins}`} value={this.state.csgo_settings_sourcemod_admins} onChange={(ev) => this.setState({ csgo_settings_sourcemod_admins: ev.target.value })} />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.sourcemod_plugins}`} value={this.state.csgo_settings_sourcemod_plugins} onChange={(ev) => this.setState({ csgo_settings_sourcemod_plugins: ev.target.value })} />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.steam_game_server_login_token}`} value={this.state.csgo_settings_steam_game_server_login_token} onChange={(ev) => this.setState({ csgo_settings_steam_game_server_login_token: ev.target.value })} />
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
                                                                {/* <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.tickrate}`} value={this.state.csgo_settings_tickrate} onChange={(ev) => this.setState({ csgo_settings_tickrate: ev.target.value })} /> */}
                                                                <select className="form-control" defaultValue={`${game_server.csgo_settings.tickrate}`} onChange={(ev) => this.setState({ csgo_settings_tickrate: ev.target.value })} >
                                                                    <option value={null} disabled>Select Tickrate</option>
                                                                    <option value="">None</option>
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.workshop_authkey}`} value={this.state.csgo_settings_workshop_authkey} onChange={(ev) => this.setState({ csgo_settings_workshop_authkey: ev.target.value })} />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.workshop_id}`} value={this.state.csgo_settings_workshop_id} onChange={(ev) => this.setState({ csgo_settings_workshop_id: ev.target.value })} />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.workshop_start_map_id}`} value={this.state.csgo_settings_workshop_start_map_id} onChange={(ev) => this.setState({ csgo_settings_workshop_start_map_id: ev.target.value })} />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Steam ID of workshop start map</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mr-3 my-4">
                                                            <button type="button" className="btn btn-square btn-hero-primary ml-auto" 
                                                            onClick={this.onHandleClick}
                                                            >
                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                    <font style={{ verticalAlign: 'inherit' }}>Update Sever</font>
                                                                </font>
                                                            </button>
                                                        </div>
                                                    </React.Fragment>
                                                    : null
                                            }
                                            {
                                                game_server.teamspeak3_settings ?
                                                    <React.Fragment>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">teamspeak3_settings.slots</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="number" className="form-control" placeholder={`${game_server.teamspeak3_settings.slots}`} value={this.state.teamspeak3_settings_slots} onChange={(ev) => this.setState({ teamspeak3_settings_slots: ev.target.value })} />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Teamspeack3 slots number</span>
                                                            </div>
                                                        </div>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">teamspeak3_settings.ts_admin_token</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.teamspeak3_settings.ts_admin_token}`} disabled />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Teamspeack3 admin token</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mr-3 my-4">
                                                            <button type="button" className="btn btn-square btn-hero-primary ml-auto" 
                                                            onClick={this.onHandleClick}
                                                            >
                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                    <font style={{ verticalAlign: 'inherit' }}>Update Sever</font>
                                                                </font>
                                                            </button>
                                                        </div>
                                                    </React.Fragment>
                                                    : null
                                            }

                                        </div>
                                        :
                                        (isError ?
                                            <div className="d-flex justify-content-center">
                                                <h3>Invalid Request</h3>
                                            </div>
                                            :
                                            <div className="d-flex justify-content-center">
                                                <h3>No Data</h3>
                                            </div>)
                                )

                        }
                    </div >
                </div>
            </div>
        );
    }
}