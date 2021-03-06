exports.definition = {

	// definição da estrutura da collection
	config: {
		columns: {
			"B1_FILIAL":"text",
			"B1_COD":"text",
			"B1_DESC":"text"
		},
		adapter: {
			"type": "sql",
			"collection_name": "SB1",
			"idAttribute": "B1_COD"
		}
	},
	

	// função para deletar todos os itens da collection
	extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
 
            deleteAll : function() {
 
                var collection = this;
                
 				Ti.API.info("Deletando collection SB1");
 				
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
 
                collection.trigger('sync');

            },

        });
        // end extend
        return Collection;
    }

};