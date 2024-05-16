#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloWorldLambdaStack } from '../lib/api-cdk-stack';

const app = new cdk.App();
new HelloWorldLambdaStack(app, 'HelloWorldLambdaStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION ?? 'us-east-1',
  }
});