import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";



const validTestHeader = { authorization: "ApiKey_4f9a2c7e81b3d65a09e4c1f7b2d8a3e6_xxxx" }
const invalidTestHeader = {}


describe('getKey', () => {
  test('Proper string format is returned', () => {
    expect(getAPIKey(validTestHeader)).toHaveLength(32)
  })
  test('Error is thrown on empty header', () => {
    expect(getAPIKey(invalidTestHeader)).toBeNull()
  })
   test('Failing test to trigger CI warning', () => {
    expect(getAPIKey(validTestHeader)).toBeTypeOf("boolean")
  })


})










