import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="content content-full">
                {/* Live Stats */}
                <div className="row">
                    <div className="col-md-6">
                        <Link className="block block-rounded block-link-shadow" to="/">
                            <div className="block-content d-flex justify-content-between">
                                <div className="mr-3">
                                    <p className="text-muted mb-0">
                                        People Online
                                    </p>
                                    <p className="font-size-h3 font-w300 mb-0">
                                        12 <small>/16</small>
                                    </p>
                                </div>
                                <div>
                                    <i className="fa fa-2x fa-users text-xeco-lighter" />
                                </div>
                            </div>
                            <div className="block-content block-content-full overflow-hidden">
                                {/* Gaming People Online Container */}
                                
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link className="block block-rounded block-link-pop" to="/">
                            <div
                                className="block-content block-content-full d-lg-flex align-items-lg-center justify-content-lg-between">
                                <div className="text-center text-lg-left">
                                    {/* Gaming CPU Usage Container */}
                                    
                                </div>
                                <div className="text-center text-lg-right mt-4 mt-lg-0 ml-lg-3">
                                    <p className="text-muted mb-0">
                                        CPU Usage
                                    </p>
                                    <p className="font-size-h3 font-w300 mb-0">
                                        <span id="dm-gaming-sl-cpu-current">32</span>%
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link className="block block-rounded block-link-pop" to="/">
                            <div
                                className="block-content block-content-full d-lg-flex align-items-lg-center justify-content-lg-between">
                                <div className="text-center text-lg-left">
                                    {/* Gaming RAM Usage Container */}
                                    
                                </div>
                                <div className="text-center text-lg-right mt-4 mt-lg-0 ml-lg-3">
                                    <p className="text-muted mb-0">
                                        RAM Usage
                                    </p>
                                    <p className="font-size-h3 font-w300 mb-0">
                                        <span id="dm-gaming-sl-ram-current">250</span>MB
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* END Live Stats */}
                {/* Console */}
                <div className="block block-rounded">
                    <div className="block-header block-header-default">
                        <h3 className="block-title">Console Log</h3>
                        <div className="block-options">
                            <button type="button" className="btn-block-option">
                                <i className="fa fa-wrench" />
                            </button>
                        </div>
                    </div>
                    <div className="block-content">
                        <div>
                            <div className="input-group">
                                <input type="text" className="form-control" id="dm-gaming-send-command"
                                    name="dm-gaming-send-command" placeholder="..." />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">Send Command</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="bg-dark rounded p-3">
                            <pre
                                className="mb-0"><code className="text-body-color-light font-size-sm">[12:00:02] MC_1685: Server started!{"\n"}[12:00:03] MC_1685: Using 243MB of RAM{"\n"}[12:00:05] MC_1685: Spawning.. 15%{"\n"}[12:00:06] MC_1685: Spawning.. 56%{"\n"}[12:00:09] MC_1685: Spawning.. 78%{"\n"}[12:00:10] MC_1685: Spawning.. 100%, Done!{"\n"}[12:03:32] MC_1685: 'johngamer' Player joined the server!{"\n"}[12:03:43] MC_1685: 'craft3222' Player joined the server!{"\n"}[12:04:54] MC_1685: 'minec34' Player joined the server!{"\n"}[12:05:55] MC_1685: 'matth' Player joined the server!</code></pre>
                        </div>
                    </div>
                </div>
                {/* END Console */}
                {/* Plugins */}
                {/* <div className="block block-rounded">
                    <div className="block-header block-header-default">
                        <h3 className="block-title">Plugins</h3>
                        <div className="block-options">
                            <button type="button" className="btn-block-option">
                                <i className="fa fa-plus" /> Add New
                            </button>
                            <button type="button" className="btn-block-option">
                                <i className="fa fa-wrench" />
                            </button>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="table-responsive">
                            <table className="table table-hover table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th className="text-center">Version</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="font-w600 mb-1">
                                                WorldEdit
                                            </p>
                                            <p className="font-size-sm text-muted">
                                                An in-game map editor for both creative and survival modes
                                            </p>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-size-sm">v7.3.3</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="custom-control custom-switch custom-control-primary mb-1">
                                                <input type="checkbox" className="custom-control-input" id="dm-gaming-plugin1"
                                                    name="dm-gaming-plugin1" defaultValue={1} defaultChecked />
                                                <label className="custom-control-label" htmlFor="dm-gaming-plugin1">Enabled</label>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-danger" to="/">Uninstall</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-w600 mb-1">
                                                PermissionsEx
                                            </p>
                                            <p className="font-size-sm text-muted">
                                                It is a new permissions plugin, based on Permissions ideas and supports all of its
                                                features.
                                            </p>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-size-sm">v2.5.0</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="custom-control custom-switch custom-control-primary mb-1">
                                                <input type="checkbox" className="custom-control-input" id="dm-gaming-plugin2"
                                                    name="dm-gaming-plugin2" defaultValue={1} defaultChecked />
                                                <label className="custom-control-label" htmlFor="dm-gaming-plugin2">Enabled</label>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-danger" to="/">Uninstall</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-w600 mb-1">
                                                WorldGuard
                                            </p>
                                            <p className="font-size-sm text-muted">
                                                It is a powerful plugin with a large bag of tricks for server owners, server map
                                                makers, regular survival servers, and everyone in between!
                                            </p>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-size-sm">v10.1.2</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="custom-control custom-switch custom-control-primary mb-1">
                                                <input type="checkbox" className="custom-control-input" id="dm-gaming-plugin3"
                                                    name="dm-gaming-plugin3" defaultValue={1} defaultChecked />
                                                <label className="custom-control-label" htmlFor="dm-gaming-plugin3">Enabled</label>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-danger" to="/">Uninstall</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-w600 mb-1">
                                                Vault
                                            </p>
                                            <p className="font-size-sm text-muted">
                                                A Permissions, Chat, &amp; Economy API to give plugins easy hooks into these systems
                                                without needing to hook or depend on each individual plugin themselves.
                                            </p>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-size-sm">v1.9.2</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="custom-control custom-switch custom-control-primary mb-1">
                                                <input type="checkbox" className="custom-control-input" id="dm-gaming-plugin4"
                                                    name="dm-gaming-plugin4" defaultValue={1} defaultChecked />
                                                <label className="custom-control-label" htmlFor="dm-gaming-plugin4">Enabled</label>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-danger" to="/">Uninstall</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-w600 mb-1">
                                                Essentials
                                            </p>
                                            <p className="font-size-sm text-muted">
                                                Essentials offers over 100 commands and features useful on just about every server.
                                            </p>
                                        </td>
                                        <td className="text-center">
                                            <span className="font-size-sm">v2.8.8</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="custom-control custom-switch custom-control-primary mb-1">
                                                <input type="checkbox" className="custom-control-input" id="dm-gaming-plugin5"
                                                    name="dm-gaming-plugin5" defaultValue={1} />
                                                <label className="custom-control-label" htmlFor="dm-gaming-plugin5">Enabled</label>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-danger" to="/">Uninstall</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                 */}
                {/* END Plugins */}
            </div>
        );
    }
}