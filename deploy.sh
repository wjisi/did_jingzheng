#!/bin/bash

cd `dirname $0`

npm run build

# 移动favicon
# mv dist/static/favicon.ico dist

# 拷贝到服务器
rsync -avzr -e 'ssh -p 6422' dist/ front@58.243.201.56:~/frontcode/jdid_cn/dist

#正式环境 https://jdid.cn