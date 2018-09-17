export PATH=${PATH}:$HOME/.lua:$HOME/.local/bin:${TRAVIS_BUILD_DIR}/install/luarocks/bin
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
bash .travis/setup_lua.sh
eval `$HOME/.lua/luarocks path`
