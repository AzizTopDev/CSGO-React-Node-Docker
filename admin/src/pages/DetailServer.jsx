import React, { Component } from 'react';
import axios from '../util/Api';

export default class DetailServer extends Component {
    _isMounted = false;
    state = {
        isLoading: false,
        game_server: null,
        isError: false
    };
    componentDidMount() {
        this._isMounted = true;
        const { serverId } = this.props.match.params;
        if (this._isMounted) {
            this.setState({ isLoading: true });
                axios.get(`/admin/server/detail/${serverId}`).then(({ data }) => {
                    console.log(" response data ---------", data);
                    const { game_server } = data;
                    this.setState({
                        isLoading: false,
                        game_server: game_server
                    });
                }).catch(err => {
                    console.error(" get server detail error : ", err);
                    this.setState({ 
                        isLoading: false,
                        isError: true 
                    });
                });    
        }
    }
    render() {
        const { isLoading, isError, game_server } = this.state;
        return (
            <div className="content content-full">
                <div className="block block-rounded block-bordered">
                    {/* Block Header */}
                    <div className="block-header block-header-default">
                        <h3 className="block-title">
                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Server All Detail</font></font>
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
                                                    <span className="text-muted">This is server id of dathost</span>
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
                                                    <span className="text-muted">name</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.name}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Name of the server</span>
                                                </div>
                                            </div>


                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">location</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.location}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Server location</span>
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
                                                    <span className="text-muted">Server ip</span>
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
                                                    <span className="text-muted">Server status</span>
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
                                                    <span className="text-muted">custom_domain</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.custom_domain}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Use a custom domain for the server</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">autostop</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.autostop}`} disabled />
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
                                                    <input type="text" className="form-control" placeholder={`${game_server.autostop_minutes}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Minutes until autostop triggers if is is enabled</span>
                                                </div>
                                            </div>
                                            {/* row */}
                                            <div className="row push">
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">enable_mysql</span>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" className="form-control" placeholder={`${game_server.enable_mysql}`} disabled />
                                                </div>
                                                <div className="col-lg-4 my-auto">
                                                    <span className="text-muted">Was mySql enabled?</span>
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
                                            {
                                                game_server.csgo_settings ?
                                                    <React.Fragment>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">csgo_settings.rcon</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.rcon}`} disabled />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">RCON password</span>
                                                            </div>
                                                        </div>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">csgo_settings.password</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.password}`} disabled />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Server password</span>
                                                            </div>
                                                        </div>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">csgo_settings.autoload_configs</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.autoload_configs}`} disabled />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.disable_bots}`} disabled />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.enable_csay_plugin}`} disabled />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.enable_gotv}`} disabled />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.enable_sourcemod}`} disabled />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.game_mode}`} disabled />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Game mode</span>
                                                            </div>
                                                        </div>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">csgo_settings.slots</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.slots}`} disabled />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Server slots</span>
                                                            </div>
                                                        </div>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">csgo_settings.steam_game_server_login_token</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.steam_game_server_login_token}`} disabled />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Steam Game Server Login Token</span>
                                                            </div>
                                                        </div>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">csgo_settings.sourcemod_admins</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.sourcemod_admins}`} disabled />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Sourcemod admins</span>
                                                            </div>
                                                        </div>
                                                        {/* row */}
                                                        <div className="row push">
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">csgo_settings.workshop_id</span>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.workshop_id}`} disabled />
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.csgo_settings.workshop_start_map_id}`} disabled />
                                                            </div>
                                                            <div className="col-lg-4 my-auto">
                                                                <span className="text-muted">Steam ID of workshop start map</span>
                                                            </div>
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
                                                                <input type="text" className="form-control" placeholder={`${game_server.teamspeak3_settings.slots}`} disabled />
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