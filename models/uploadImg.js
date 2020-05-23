const multer = require('multer');

const store = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, 'public/images/'); //hỉnh ảnh sẽ chưa trong folder uploads
       
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname); ;// mặc định sẽ save name của hình ảnh
        // là name gốc, chúng ta có thể rename nó.  
    }
});

var upload = multer({storage:store});

module.exports = upload;