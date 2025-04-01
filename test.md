
sample TypeScript Test File 
// src/math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// src/math.test.ts
import { test, describe } from 'node:test';
import assert from 'node:assert';
import { add } from './math';

describe('Math Functions', () => {
  test('add() should return the sum of two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 1), 0);
  });

  test('add() should return a number', () => {
    assert.strictEqual(typeof add(1, 1), 'number');
  });
});

*******************************************************
Async Function Testing Example

// src/asyncFunction.ts
export async function fetchData(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve('data'), 1000));
}

// src/asyncFunction.test.ts
import { test } from 'node:test';
import assert from 'node:assert';
import { fetchData } from './asyncFunction';

test('fetchData should return "data"', async () => {
  const result = await fetchData();
  assert.strictEqual(result, 'data');
});


--------------------------------------------------------------------------

 Mocking in TypeScript
// src/api.ts
export async function getUser(id: number): Promise<{ id: number; name: string }> {
  return { id, name: 'Alice' };
}

// src/api.test.ts
import { test } from 'node:test';
import assert from 'node:assert';
import { getUser } from './api';

// Mock function
async function mockGetUser(): Promise<{ id: number; name: string }> {
  return { id: 1, name: 'Mock User' };
}

test('getUser should return mocked data', async () => {
  const result = await mockGetUser();
  assert.deepStrictEqual(result, { id: 1, name: 'Mock User' });
});


******************************************************************************
Mocking Database Calls

export async function getUserFromDB(id: number) {
  return { id, name: 'Real User' };
}

// src/__tests__/db.test.ts
import { test } from 'node:test';
import assert from 'node:assert';
import * as db from '../db';

test('Mock database call', async () => {
  db.getUserFromDB = async () => ({ id: 1, name: 'Mock User' });

  const user = await db.getUserFromDB(123);
  assert.deepStrictEqual(user, { id: 1, name: 'Mock User' });
});

