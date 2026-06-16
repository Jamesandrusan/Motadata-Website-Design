# PROJECT-SPECIFIC SAFETY MANDATES

- **STRICT NO-DELETE POLICY:** In this workspace and across all drives, you are forbidden from using any command or tool (e.g., `rm`, `del`, `Remove-Item`) that deletes data.
- **PERMISSION PROTOCOL:** Every action that modifies the system state or accesses data outside this project folder MUST be preceded by an explicit request for permission.
- **DATA INTEGRITY:** Maintain the integrity of all files. Do not perform "cleanups" or "optimizations" that involve removing old or unused files.
- **NO DRIVE-WIDE ACCESS:** Do not scan, enumerate, index, modify, move, copy, overwrite, format, partition, mount, unmount, or otherwise operate on an entire drive such as `C:\`, `D:\`, or external disks. Work only inside the current project unless the user names an exact path.
- **ONE-TIME SPECIFIC ACCESS ONLY:** Any required access outside this project must be requested for one exact file or folder path, for the current task only. Do not ask for reusable or broad approval for whole drives, parent folders, or destructive commands.
- **NO DESTRUCTIVE APPROVALS:** Never request persistent approval rules for delete, wipe, clean, reset, restore, force, format, partition, or recursive remove commands. If a destructive action is requested, stop and ask for a backup-confirmed, exact-path instruction first.
- **PROTECTED OPERATIONS:** Treat these as prohibited unless the user gives a new, explicit, exact-path instruction in the current turn: `Remove-Item`, `rm`, `del`, `erase`, `rmdir`, `rd`, `Clear-Content`, `Clear-Item`, `Move-Item`, `Rename-Item`, `git clean`, `git reset --hard`, `git restore`, `format`, `diskpart`, `Remove-Partition`, `Remove-Volume`, `Format-Volume`, `dd`, `shred`, `truncate`, and any recursive `-Force` operation.
- **READ-ONLY DEFAULT:** Default to read-only inspection. Any write, overwrite, move, rename, dependency install, server start that writes logs/cache, or command with `-Force` requires a fresh one-time approval and an exact target path.
- **NO PERSISTENT COMMAND ALLOWLISTS:** Do not create or request reusable command approvals for shell, PowerShell, Node, Python, npm/npx, curl, tunnels, scripts, or any command that can write to disk or access broad filesystem scope.
- **NO RECURSIVE DRIVE SCANS:** Do not run recursive scans from user profile roots, drive roots, Downloads, Documents, Desktop, Windows folders, or external drives. Limit searches to the current project or a user-provided exact path.
- **NO AUTO WEB OR NETWORK ACCESS:** Do not browse, fetch URLs, call external APIs, run tunnels, download scripts, or pipe network output into an interpreter unless the user explicitly requests it for the current task.
- **NO INLINE ARBITRARY INTERPRETERS:** Do not run `node -e`, `node --eval`, `python -c`, `py -c`, `Invoke-Expression`, `iex`, `eval`, `exec`, or shell-sourced scripts. Use reviewed project files only, with one-time approval if execution writes anything.
- **NO SYSTEM SECURITY CHANGES:** Do not change Windows ACLs, ownership, registry keys, services, scheduled tasks, restore settings, shadow copies, Defender/security settings, partitions, volumes, or boot configuration unless the user gives a current-turn, exact command request and confirms a backup exists.
- **NO PACKAGE REMOVAL OR CACHE CLEANING:** Do not run uninstall, remove, prune, cache clean, cleanup, repair, or optimize commands for npm, pip, Windows packages, modules, apps, services, or system components.

# SHIELD & SECURITY PROTECTION

- **PROJECT SHIELD:** Apply maximum security protocols to this workspace. Never expose `.env` files, private keys, or internal configuration details.
- **VULNERABILITY SCANNING:** Proactively check for and report any security weaknesses in dependencies or code patterns.
- **SAFE EXECUTION:** Only execute commands that are verified to be safe and do not interact with external networks or unauthorized system resources.
- **ENCRYPTION & SECRECY:** If any data must be handled, ensure it is treated as highly confidential and never stored in plain text or logged.
