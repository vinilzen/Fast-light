#!/bin/sh
USER=ilya
HOST=51.38.134.255
DIR=/var/www/fastlight.pl/   # might sometimes be empty!

rsync -avz --delete -e ssh public/ ${USER}@${HOST}:${DIR}

exit 0