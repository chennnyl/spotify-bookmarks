import withSession from '../../lib/session'

export const config = {
    api: {
        externalResolver: true
    }
}

export default withSession(async (req, res) => {
    req.session.destroy();

    res.redirect('/');
    res.end();
});