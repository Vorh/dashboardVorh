#!/usr/bin/env bash

ng build --base-href /dist/
cp -a dist/ ~/Programs/apache-tomcat-7.0.77/webapps/ROOT/resources/


