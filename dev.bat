@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"

where pnpm >nul 2>&1
if errorlevel 1 goto :nopnpm

if exist "node_modules\" goto :depsok
echo [信息] 未检测到 node_modules，正在执行 pnpm install ...
call pnpm install
if errorlevel 1 goto :badinstall

:depsok
echo [信息] 启动 Astro 开发服务器（默认 http://localhost:4321/）...
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:4321/"

call pnpm dev
goto :eof

:nopnpm
echo [错误] 未在 PATH 中找到 pnpm。请先安装: https://pnpm.io/installation
pause
exit /b 1

:badinstall
echo [错误] 依赖安装失败。
pause
exit /b 1
