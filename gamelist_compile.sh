#!/bin/env bash

echo "com.example.gamelist1$(awk '!/^[[:space:]]*$/ && !/^#/ && !(/[[:alnum:]]+[[:space:]]+[[:alnum:]]+[[:space:]]+[[:alnum:]]+/) {sub("-e ", ""); printf "\n%s", $0}' "./gamelist.txt")" >module/gamelist.txt
