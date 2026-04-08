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

echo [2/3] Auto-fixing Biome in src (format + import sort + safe lint fixes)...
pnpm exec biome check --write ./src
if errorlevel 1 (
  echo [ERROR] Biome check --write failed.
  exit /b 1
)

echo [3/3] Verifying with Biome CI (same command family as GitHub Actions)...
pnpm exec biome ci ./src
if errorlevel 1 (
  echo [ERROR] Biome CI still reports issues (may need manual fixes or --unsafe).
  exit /b 1
)

echo [OK] Biome auto-fix + CI verification completed successfully.
exit /b 0
