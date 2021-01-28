#!/usr/bin/env bash
grep -rl "s.dependency 'React/Core'" node_modules/ | xargs sed -i '' 's=React/Core=React-Core=g'

cd ios
pod install
cd ..