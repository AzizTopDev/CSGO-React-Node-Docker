const router = require('express').Router();
const fetch = require('node-fetch');
const auth = require('../auth');
const FormData = require('form-data');

const username = process.env.DATHOST_USERNAME;
const password = process.env.DATHOST_PASSWORD;
const BufferString = Buffer.from(`${username}:${password}`).toString('base64');

router.get('/', async (req, res, next) => {
    const response = await fetch('https://dathost.net/api/0.1/game-servers', {
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });
    const game_severs = await response.json();
    console.log("Game Servers: ", game_severs);
    return res.json({ game_servers: game_severs });
});

router.get('/detail/:sever_id', async (req, res, next) => {
    const { sever_id } = req.params;
    const response = await fetch(`https://dathost.net/api/0.1/game-servers/${sever_id}`, {
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });
    if (response.ok) {
        const game_sever = await response.json();
        return res.json({ game_server: game_sever });
    } else {
        res.status(response.status);
        res.send("Not found sever")
    }
});

router.post('/create', async (req, res, next) => {
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
    } = req.body;
    console.log("+++++++++++++++++++ ", req.body);
    const form = new FormData();
    if (autostop !== "") form.append('autostop', autostop);
    if (autostop_minutes !== "") form.append('autostop_minutes', parseInt(autostop_minutes));
    if (custom_domain !== "") form.append('custom_domain', custom_domain);
    if (enable_mysql !== "") form.append('enable_mysql', enable_mysql);
    form.append('game', game);
    if (location !== "") form.append('location', location);
    form.append('name', name);

    if (csgo_settings_autoload_configs !== "") form.append('csgo_settings.autoload_configs', csgo_settings_autoload_configs);
    if (csgo_settings_disable_bots !== "") form.append('csgo_settings.disable_bots', csgo_settings_disable_bots);
    if (csgo_settings_enable_csay_plugin !== "") form.append('csgo_settings.enable_csay_plugin', csgo_settings_enable_csay_plugin);
    if (csgo_settings_enable_gotv !== "") form.append('csgo_settings.enable_gotv', csgo_settings_enable_gotv);
    if (csgo_settings_enable_sourcemod !== "") form.append('csgo_settings.enable_sourcemod', csgo_settings_enable_sourcemod);
    if (csgo_settings_game_mode !== "") form.append('csgo_settings.game_mode', csgo_settings_game_mode);
    if (csgo_settings_insecure !== "") form.append('csgo_settings.insecure', csgo_settings_insecure);
    if (csgo_settings_mapgroup !== "") form.append('csgo_settings.mapgroup', csgo_settings_mapgroup);
    if (csgo_settings_mapgroup_start_map !== "") form.append('csgo_settings.mapgroup_start_map', csgo_settings_mapgroup_start_map);
    if (csgo_settings_maps_source !== "") form.append('csgo_settings.maps_source', csgo_settings_maps_source);
    if (csgo_settings_password !== "") form.append('csgo_settings.password', csgo_settings_password);
    if (csgo_settings_pure_server !== "") form.append('csgo_settings.pure_server', csgo_settings_pure_server);
    form.append('csgo_settings.rcon', csgo_settings_rcon);
    if (csgo_settings_slots !== "") form.append('csgo_settings.slots', parseInt(csgo_settings_slots));
    if (csgo_settings_sourcemod_admins !== "") form.append('csgo_settings.sourcemod_admins', csgo_settings_sourcemod_admins);
    if (csgo_settings_sourcemod_plugins !== "") form.append('csgo_settings.sourcemod_plugins', csgo_settings_sourcemod_plugins);
    if (csgo_settings_steam_game_server_login_token !== "") form.append('csgo_settings.steam_game_server_login_token', csgo_settings_steam_game_server_login_token);
    if (csgo_settings_tickrate !== "") form.append('csgo_settings.tickrate', parseFloat(csgo_settings_tickrate));
    if (csgo_settings_workshop_authkey !== "") form.append('csgo_settings.workshop_authkey', csgo_settings_workshop_authkey);
    if (csgo_settings_workshop_id !== "") form.append('csgo_settings.workshop_id', csgo_settings_workshop_id);
    if (csgo_settings_workshop_start_map_id !== "") form.append('csgo_settings.workshop_start_map_id', csgo_settings_workshop_start_map_id);
    if (teamspeak3_settings_slots !== "") form.append('teamspeak3_settings.slots', parseInt(teamspeak3_settings_slots));
    console.log(" CREAT form : ", form);
    console.log("CCCCCCCCCC CREAT TTTTTTTTTTT");
    const response = await fetch('https://dathost.net/api/0.1/game-servers', {
        method: 'POST',
        body: form,
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });

    if (response.ok) {
        const game_sever = await response.json();
        return res.json({ game_sever: game_sever });
    } else {
        console.error(" repsonse status :", response.status);
        console.error(" repsonse error :", response.error);
        res.status(400);
        return res.json({ message: "failed" })
    }
});

router.post('/update', async (req, res, next) => {
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
    } = req.body;
    console.log("+++++++++++++++++++ ", req.body);

    const form = new FormData();
    if (autostop !== "") form.append('autostop', autostop);
    if (autostop_minutes !== "") form.append('autostop_minutes', parseInt(autostop_minutes));
    if (custom_domain !== "") form.append('custom_domain', custom_domain);
    if (enable_mysql !== "") form.append('enable_mysql', enable_mysql);
    if (location !== "") form.append('location', location);
    if (name !== "") form.append('name', name);

    if (csgo_settings_autoload_configs !== "") form.append('csgo_settings.autoload_configs', csgo_settings_autoload_configs);
    if (csgo_settings_disable_bots !== "") form.append('csgo_settings.disable_bots', csgo_settings_disable_bots);
    if (csgo_settings_enable_csay_plugin !== "") form.append('csgo_settings.enable_csay_plugin', csgo_settings_enable_csay_plugin);
    if (csgo_settings_enable_gotv !== "") form.append('csgo_settings.enable_gotv', csgo_settings_enable_gotv);
    if (csgo_settings_enable_sourcemod !== "") form.append('csgo_settings.enable_sourcemod', csgo_settings_enable_sourcemod);
    if (csgo_settings_game_mode !== "") form.append('csgo_settings.game_mode', csgo_settings_game_mode);
    if (csgo_settings_insecure !== "") form.append('csgo_settings.insecure', csgo_settings_insecure);
    if (csgo_settings_mapgroup !== "") form.append('csgo_settings.mapgroup', csgo_settings_mapgroup);
    if (csgo_settings_mapgroup_start_map !== "") form.append('csgo_settings.mapgroup_start_map', csgo_settings_mapgroup_start_map);
    if (csgo_settings_maps_source !== "") form.append('csgo_settings.maps_source', csgo_settings_maps_source);
    if (csgo_settings_password !== "") form.append('csgo_settings.password', csgo_settings_password);
    if (csgo_settings_pure_server !== "") form.append('csgo_settings.pure_server', csgo_settings_pure_server);
    if (csgo_settings_rcon !== "") form.append('csgo_settings.rcon', csgo_settings_rcon);
    if (csgo_settings_slots !== "") form.append('csgo_settings.slots', parseInt(csgo_settings_slots));
    if (csgo_settings_sourcemod_admins !== "") form.append('csgo_settings.sourcemod_admins', csgo_settings_sourcemod_admins);
    if (csgo_settings_sourcemod_plugins !== "") form.append('csgo_settings.sourcemod_plugins', csgo_settings_sourcemod_plugins);
    if (csgo_settings_steam_game_server_login_token !== "") form.append('csgo_settings.steam_game_server_login_token', csgo_settings_steam_game_server_login_token);
    if (csgo_settings_tickrate !== "") form.append('csgo_settings.tickrate', parseFloat(csgo_settings_tickrate));
    if (csgo_settings_workshop_authkey !== "") form.append('csgo_settings.workshop_authkey', csgo_settings_workshop_authkey);
    if (csgo_settings_workshop_id !== "") form.append('csgo_settings.workshop_id', csgo_settings_workshop_id);
    if (csgo_settings_workshop_start_map_id !== "") form.append('csgo_settings.workshop_start_map_id', csgo_settings_workshop_start_map_id);
    if (teamspeak3_settings_slots !== "") form.append('teamspeak3_settings.slots', parseInt(teamspeak3_settings_slots));

    console.log("NNNNNNNNNNN UPDATE NNNNNNNNNNNN");
    const response = await fetch(`https://dathost.net/api/0.1/game-servers/${sever_id}`, {
        method: 'PUT',
        body: form,
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });

    if (response.ok) {
        return res.json({ message: "Sever was updated successfully !" });
    } else {
        res.status(400);
        return res.json({ message: "failed" })
    }
});
router.get('/delete/:server_id', async (req, res, next) => {
    const { server_id } = req.params;
    console.error(" sever_id +++ ", server_id);
    const response = await fetch(`https://dathost.net/api/0.1/game-servers/${server_id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });

    if (response.ok) {
        return res.json({ status: "success" });
    } else {
        res.status(response.status);
        return res.json({ status: "failed" })
    }
});
router.get('/start/:server_id', async (req, res, next) => {
    const { server_id } = req.params;
    console.log(" sever_id +++ ", server_id);
    const response = await fetch(`https://dathost.net/api/0.1/game-servers/${server_id}/start`, {
        method: 'POST',
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });

    if (response.ok) {
        return res.json({ status: "success" });
    } else {
        res.status(response.status);
        return res.json({ status: "failed" })
    }
});
router.get('/stop/:server_id', async (req, res, next) => {
    const { server_id } = req.params;
    const response = await fetch(`https://dathost.net/api/0.1/game-servers/${server_id}/stop`, {
        method: 'POST',
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });

    if (response.ok) {
        return res.json({ status: "success" });
    } else {
        res.status(response.status);
        return res.json({ status: "failed" })
    }
});
router.get('/metrics/:server_id', async (req, res, next) => {
    const { server_id } = req.params;
    console.log(" server id : ", server_id);
    const response = await fetch(`https://dathost.net/api/0.1/game-servers/${server_id}/metrics`, {
        headers: {
            authorization: `Basic ${BufferString}`,
        }
    });

    if (response.ok) {
        const data = await response.json();
        return res.json({ metrics: data });
    } else {
        res.status(response.status);
        return res.json({ status: "failed" })
    }
})

module.exports = router;