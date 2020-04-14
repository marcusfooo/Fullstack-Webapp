const resolvers = {
    Query: {
     async repo (root, { id }, { models }) {
      return models.Repo.findByPk(id)
    },
     async repos (root, args, { models }){
      return models.Repo.findAll()
    } 
  },
  Mutation: {
    async createRepo (root, { name,descriptio,url,language }, { models }) {
      return models.Repo.create({
       name,
       description,
       url,
       language
    })
    }}
}

module.exports = resolvers
