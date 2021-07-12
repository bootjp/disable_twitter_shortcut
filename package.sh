#!/bin/bash

# run by project root

rm -rf ./dist/*
zip -jr ./dist/disable_twitter_short_cut.zip ./* -x'*.git*'
