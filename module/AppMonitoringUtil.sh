#!/system/bin/sh
# Encore AppMonitoringUtil

active=$(dumpsys activity activities | grep mResumedActivity | awk '{print $4}' | awk -F '/' '{print $1}')
echo "$(cat /data/encore/gamelist.txt)" | grep -o "$active"
