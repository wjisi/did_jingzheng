#!/bin/bash

cd `dirname $0`

npm run build

# 移动favicon
# mv dist/static/favicon.ico dist

# 拷贝到服务器
rsync -avzr -e 'ssh -p 6422' dist/ front@58.243.201.56:~/frontcode/jdid_cn/dist

# 同步
#param='web=jdid_cn';job="front-code-sync";token="115574c30a3084ab6aac18e1b005842a68";curl -X POST "https://whjenkins.jccdex.cn:8443/job/${job}/buildWithParameters?${param}" --user "afd:${token}"

#正式环境 https://jdid.cn