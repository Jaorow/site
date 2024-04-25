#!zsh
#      _   _    ___  ____   _____        ______ ___  __  __                                             │
#     | | / \  / _ \|  _ \ / _ \ \      / / ___/ _ \|  \/  |                                            │
#  _  | |/ _ \| | | | |_) | | | \ \ /\ / / |  | | | | |\/| |                                            │
# | |_| / ___ \ |_| |  _ <| |_| |\ V  V /| |__| |_| | |  | |                                            │
#  \___/_/   \_\___/|_| \_\\___/  \_/\_/(*)____\___/|_|  |_|

# This is a script to download to look fully sick bro


#!/bin/bash

print_loading_bar() {
    local width=40
    local progress=$1
    local num_chars=$((width * progress / 100))
    printf "["
    for ((i = 0; i < width; i++)); do
        if [ $i -lt $num_chars ]; then
            printf "="
        else
            printf " "
        fi
    done
    printf "] %d%%\r" $progress
}

# List of downloads
downloads=("chmod" "mdFx" "curlzsh")

# Main script
for download in "${downloads[@]}"; do
    for ((progress = 0; progress <= 100; progress++)); do
        printf "%s: Downloading: " "$download"
        print_loading_bar $progress
        sleep $(awk -v min=0.01 -v max=0.1 'BEGIN{srand(); print min+rand()*(max-min)}')
    done
    printf "\n"
done

