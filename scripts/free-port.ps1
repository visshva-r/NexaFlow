param([int]$Port = 3001)

$connections = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if (-not $connections) {
  Write-Host "Port $Port is free."
  exit 0
}

$pids = $connections.OwningProcess | Sort-Object -Unique
foreach ($pid in $pids) {
  if ($pid -gt 0) {
    Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    Write-Host "Killed process $pid on port $Port"
  }
}
