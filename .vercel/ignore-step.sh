#!/bin/bash

# Related: https://vercel.com/guides/how-do-i-use-the-ignored-build-step-field-on-vercel

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF";

# Only proceed for main, develop, and feature branches
if [[ "$VERCEL_GIT_COMMIT_REF" != "main" && "$VERCEL_GIT_COMMIT_REF" != "develop" && "$VERCEL_GIT_COMMIT_REF" != feature/* ]] ; then
  echo "🛑 - Build cancelled (Reason: Incorrect branch. We only deploy main, develop and fetures branches.)"
  exit 0;
fi

# Only proceed when files in /app have changed
if [[ ! `git diff HEAD^ HEAD .` ]]; then
  echo "🛑 - Build cancelled (Reason: No app changes.)"
  exit 0;
fi

echo "✅ - Build can proceed"
exit 1;
