#!/bin/sh
SKIPMOUNT=false
PROPFILE=false
POSTFSDATA=false
LATESTARTSERVICE=true
REPLACE="

"

sleep 2
ui_print ""
ui_print "************************************"
ui_print "               ENCORE Tweaks          "
ui_print "************************************"
ui_print "     By Telegram @Rem01Gaming     "
ui_print "************************************"
ui_print ""
sleep 2

ui_print "- Extracting module files"
mkdir /data/encore
unzip -o "$ZIPFILE" 'system/*' -d $MODPATH >&2
unzip -o "$ZIPFILE" 'service.sh' -d "$MODPATH" >&2
unzip -o "$ZIPFILE" 'gamelist.txt' -d "/data/encore" >&2
unzip -o "$ZIPFILE" 'AppMonitoringUtil.sh' -d "/data/encore" >&2
[[ -f /data/encore/skip_setpriority ]] || echo 0 >/data/encore/skip_setpriority

if pm list packages | grep -q bellavita.toast; then
	ui_print "- The Bellavita Toast app is already installed."
else
	ui_print "- Bellavita Toast isn't installed"
	ui_print "- Installing bellavita toast..."
	unzip -o "$ZIPFILE" 'toast.apk' -d $TMPDIR >&2
	pm install $TMPDIR/toast.apk
	rm -f $TMPDIR/toast.apk
	if ! pm list packages | grep -q bellavita.toast; then
		ui_print "- Can't install Bellavita Toast due to selinux restrictions"
		ui_print "  Please install it manually after installation."
	fi
fi

set_perm_recursive $MODPATH 0 0 0777 0777
ui_print "- Reboot is needed after installation"
