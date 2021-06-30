#!/bin/bash

echo $VITE_STORAGE_BUCKET # a variable from your set variables

VITE_STORAGE_BUCKET=thetoxify_storage_bucket # random value to check if it's getting set 

# the actually build step to run the build.
npm run build