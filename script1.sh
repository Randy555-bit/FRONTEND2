#!/bin/bash
now=$(data +%T)
echo now # 19:08:26
if [$#-e "$ARGCOUNT"]
then
	echo "usage: 'basename $0' filename"
	exit $E_WRONGARGS
fi
