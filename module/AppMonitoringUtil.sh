#!/system/bin/sh
# Encore AppMonitoringUtil

active=$(dumpsys activity activities | grep mResumedActivity | awk '{print $4}' | awk -F '/' '{print $1}')
echo "$active" | grep -Eo $(cat /data/encore/gamelist.txt)
