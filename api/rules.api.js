import { actionsWithDB } from "../db/methods.js";

export const actionsWithRules = {

    async getRules() {
        return await actionsWithDB.getAllRulesFromDB()
    },

    async deleteRule(id) {
        return await actionsWithDB.deleteByIdFromDB(id)
    },

    async createNewRule(rule) {
        return await actionsWithDB.addRuleFromDB(rule)
    },

    async editRule(rule) {
        return await actionsWithDB.editRuleInDB(rule)
    }
}
