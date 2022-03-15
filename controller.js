const Mailjs = require("@cemalgnlts/mailjs");
const mailjs = new Mailjs();

exports.callingHome = (req, res) => {
    res.render('home', { title: 'Cmail' });
}

exports.comingHome = (req, res) => {
    mailjs.getDomains()
        .then(domains => {
            console.log(domains);
            const domain = domains.data;
            const cleanDom = [];
            const domID = [];
            for (var i = 0; i < domain.length; i++) {
                cleanDom.push( { 'domain': domain[i].domain.slice(0, domain[i].domain.length - 4), 'id': domain[i].id, 'trueDomain': domain[i].domain } );
                domID.push(domain[i].id);
            }
            console.log(cleanDom);
            res.render('home', { title: 'Cmail', trueDom: domains, domains: cleanDom, domID: domID });
        }
    )
}

exports.seeDomain = (req, res) => {
    const domain = req.params.domain;
    console.log(domain);
    res.send(domain);
}