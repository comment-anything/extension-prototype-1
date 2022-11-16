Right now the development mode is set to emit source maps. This is helpful when we are checking the code in browser. But we may want to obfuscate some things, like what an admin Log looks like.

One solution is to add a second webpack config that doesn't emit source maps, and adding an obfuscating plugin to that webpack as well. That becomes the "production" compilation system. 

However we may want to discuss whether we do wish to have all these admin and mod actions built into the extension rather than in another extension altogther that mods or admins install, for the purpose of hiding what some of our sensitive data structures look like. (For example, what a mod report might look like) Because even with obfuscation it's relatively trivial to reconstruct them. 

A good reason to keep source maps is so we can debug our users more easily when they have problems.
