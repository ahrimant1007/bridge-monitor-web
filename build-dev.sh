#!/bin/bash

HOST=59.110.47.151
PORT=22
USER=root
PASSWD=Passw0rd2020
DIST_PATH=/opt/bridge-monitor-web/
CURRENT_TIMESTAMP=`date "+%Y%m%d%H%M%S"`

DIST_TAR_FILE_NAME=dist_$CURRENT_TIMESTAMP.tar

## build
npm run build
echo tar cf $DIST_TAR_FILE_NAME dist

## compress tar
tar cf $DIST_TAR_FILE_NAME dist

## upload
echo "scp -P $PORT $DIST_TAR_FILE_NAME $USER@$HOST:$DIST_PATH"
expect -c "
set timeout 60
spawn scp -P $PORT $DIST_TAR_FILE_NAME $USER@$HOST:$DIST_PATH
expect {
    \"*yes/no\" {send \"yes\n\"; exp_continue}
    \"*password:\" {send \"$PASSWD\n\"}
}
expect eof
"

## login backup decompress
expect -c "
set timeout 3
spawn ssh -p $PORT $USER@$HOST
expect {
    \"*yes/no\" {send \"yes\n\"; exp_continue}
    \"*password:\" {send \"$PASSWD\n\"; exp_continue}
}
send \"cd $DIST_PATH\n\"
send \"mv dist dist_bak_at_$CURRENT_TIMESTAMP\n\"
send \"tar xf $DIST_TAR_FILE_NAME\n \"
expect eof
"
wait
## over
rm $DIST_TAR_FILE_NAME
echo "rm $DIST_TAR_FILE_NAME"
echo build and upload is over.....


