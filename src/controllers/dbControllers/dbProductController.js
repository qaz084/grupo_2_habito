const{Product,Category,Color,Size}=require('../../database/models');

const fs = require('fs');
const path=require('path');

const controller={






    
        mock: async (req, res) => {
        	const mockData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../ ../MOCK_DATA.json"), "utf8"));
        	const x = await Product.bulkCreate(mockData);
        	console.log(x)
        	return res.json(mockData);
        },


}




exports