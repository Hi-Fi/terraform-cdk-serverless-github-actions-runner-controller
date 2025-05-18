import { Testing } from 'cdktf'
import 'cdktf/lib/testing/adapters/jest'
import { describe, expect, it } from 'vitest'
import { Aws } from '../src/lib/aws'
import { Azure } from '../src/lib/azure'
import { Gcp } from '../src/lib/gcp'

// To learn more about testing see cdk.tf/testing
describe('Should synthesize snapshot for construct', () => {
  describe('without container support on', () => {
    it('Azure', () => {
      expect(
        Testing.synthScope((scope) => {
          new Azure(scope, 'azure')
        }),
      ).toMatchSnapshot()
    })

    it('Aws', () => {
      expect(
        Testing.synthScope((scope) => {
          new Aws(scope, 'aws', {
            clusterName: 'test-cluster',
            containerSupport: false,
          })
        }),
      ).toMatchSnapshot()
    })

    it('Google', () => {
      expect(
        Testing.synthScope((scope) => {
          new Gcp(scope, 'google')
        }),
      ).toMatchSnapshot()
    })
  })

  describe('with container support on', () => {
    it('Aws', () => {
      expect(
        Testing.synthScope((scope) => {
          new Aws(scope, 'aws', {
            clusterName: 'test-cluster',
            containerSupport: true,
          })
        }),
      ).toMatchSnapshot()
    })
  })
})
