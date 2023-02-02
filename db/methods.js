import mysql from "mysql2/promise";

export const actionsWithDB = {

    async dbConnect() {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345678',
            database: 'for_test'
        })
        return connection
    },

    async executeQuery(query) {
        try {
            const connection = await actionsWithDB.dbConnect();
            const [rows] = await connection.query(query);
            await connection.end();
            return rows;
        } catch (e) {
            console.error(e.message, { query });
            throw e;
        }
    },

    async executeBindingQuery(query, binding) {
        try {
            const connection = await actionsWithDB.dbConnect();
            const [rows] = await connection.query(query, binding);
            await connection.end();
            return rows;
        } catch (e) {
            console.error(e.message, { query, binding });
            throw e;
        }
    },

    async getAllRulesFromDB() {
        return await actionsWithDB.executeQuery(
            'SELECT * FROM rules'
        )
    },

    async deleteByIdFromDB(id) {
        await actionsWithDB.executeBindingQuery(
            'DELETE FROM rules WHERE id = ?',
            [id]
        )
    },

    async addRuleFromDB(rule) {
        await actionsWithDB.executeBindingQuery(
            'INSERT INTO rules (id, title, created_at, content, language, active) VALUES (?, ?, ?, ?, ?, ?)',
            [rule.id, rule.title, new Date(), rule.content, rule.language, rule.active]
        )
    },
    async editRuleInDB(rule) {
        await actionsWithDB.executeBindingQuery(
            'UPDATE rules SET title = ?, content = ?, language = ?, active = ? WHERE id = ?',
            [rule.title, rule.content, rule.language, rule.active, rule.id]
        )
    }
}
