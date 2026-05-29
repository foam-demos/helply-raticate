import * as foam from '@foam-ai/node-opentelemetry';
import { OTEL_FOAM_COLLECTOR_BEARER_TOKEN, isProductionEnvironment } from './lib/keys';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

foam.init({
  serviceName: 'platform-web',
  isProduction: isProductionEnvironment,
  apiKey: `Bearer ${OTEL_FOAM_COLLECTOR_BEARER_TOKEN}`,
  additionalInstrumentations: [
    new ExpressInstrumentation({}) as unknown as InstrumentationBase,
  ],
});