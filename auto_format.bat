@echo off
setlocal

REM Run from repository root (the directory where this .bat file lives)
cd /d "%~dp0"

echo [1/3] Checking pnpm...
where pnpm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] pnpm not found in PATH.
  echo Please install pnpm or add it to PATH, then try again.
  exit /b 1
)

echo [2/3] Auto-fixing Biome formatting in src...
pnpm exec biome format --write ./src
if errorlevel 1 (
  echo [ERROR] Biome format failed.
  exit /b 1
)

echo [3/3] Verifying Biome checks in src...
pnpm exec biome check ./src
if errorlevel 1 (
  echo [ERROR] Biome check still reports issues.
  exit /b 1
)

echo [OK] Biome formatting + checks completed successfully.
exit /b 0
